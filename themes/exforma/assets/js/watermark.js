async function addWatermark(image, metadata) {
  if (!(image instanceof HTMLImageElement)) throw new Error('请输入有效的图片元素');
  if (!metadata?.generalInfo?.文件名 || !metadata?.basicExif?.拍摄时间)
    throw new Error('请输入有效的元数据');

  return new Promise(async (resolve, reject) => {
    try {
      const fjallaFont = new FontFace('FjallaOneIcon', 'url(/fonts/FjallaOneIcon.woff2)');
      await fjallaFont.load();
      document.fonts.add(fjallaFont);

      const barHeight = Math.min(Math.round(image.height / 6), Math.round(image.width / 6));
      const padding = Math.round(barHeight * 0.2);
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height + barHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('无法获取 Canvas 上下文');

      ctx.drawImage(image, 0, 0);

      ctx.fillStyle = '#fff';
      ctx.fillRect(0, image.height, canvas.width, barHeight);

      const logo = new Image();
      logo.src = './images/Fujifilm_logo.svg';
      logo.crossOrigin = 'Anonymous';
      await new Promise((resolve, reject) => {
        logo.onload = resolve;
        logo.onerror = () => reject(new Error('无法加载 Logo'));
      });

      const modelFontSize = Math.round((barHeight - padding * 2) * 0.45);

      // 左侧区域绘制
      const leftX = padding;
      const model = metadata.basicExif.相机 || '未知相机';
      const lens = metadata.basicExif.镜头 || '未知镜头';

      // Measure camera model text height
      ctx.font = `bold ${modelFontSize}px 'FjallaOneIcon', sans-serif`;
      ctx.fillStyle = '#1d191a';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      const modelMetrics = ctx.measureText(model);
      const modelActualHeight = modelMetrics.actualBoundingBoxAscent + modelMetrics.actualBoundingBoxDescent;
      const logoHeight = modelActualHeight;
      const logoWidth = logoHeight * (logo.width / logo.height);

      // Measure lens text height
      const lensFontSize = Math.round(barHeight * 0.16);
      ctx.font = `${lensFontSize}px 'FjallaOneIcon', sans-serif`;
      const lensMetrics = ctx.measureText(lens);
      const lensActualHeight = lensMetrics.actualBoundingBoxAscent + lensMetrics.actualBoundingBoxDescent;

      // Calculate total left-side content height and center it
      const gap = Math.round(padding / 2);
      const totalLeftHeight = logoHeight + gap + lensActualHeight;
      const topY = image.height + (barHeight - totalLeftHeight) / 2;

      // Fine-tuning offset for alignment
      const textYOffset = 2;

      // Draw logo and camera model
      ctx.font = `bold ${modelFontSize}px 'FjallaOneIcon', sans-serif`;
      ctx.fillStyle = '#1d191a';
      ctx.textBaseline = 'top';
      ctx.drawImage(logo, leftX, topY, logoWidth, logoHeight);
      ctx.fillText(model, leftX + logoWidth + padding / 2, topY + textYOffset);

      // Draw lens text
      ctx.font = `${lensFontSize}px 'FjallaOneIcon', sans-serif`;
      ctx.fillStyle = '#A6A6A6';
      ctx.textBaseline = 'top';
      ctx.fillText(lens, leftX, topY + logoHeight + gap);

      // Debug: Log heights, positions, and SVG info
      console.log(`Model text font size: ${modelFontSize}px`);
      console.log(`Model text actual height: ${modelActualHeight}px`);
      console.log(`Logo height: ${logoHeight}px`);
      console.log(`Lens text font size: ${lensFontSize}px`);
      console.log(`Lens text actual height: ${lensActualHeight}px`);
      console.log(`Total left-side height: ${totalLeftHeight}px`);
      console.log(`Text Y position: ${topY + textYOffset}px`);
      console.log(`Logo Y position: ${topY}px`);
      console.log(`Lens Y position: ${topY + logoHeight + gap}px`);
      console.log(`Logo natural width: ${logo.width}px, natural height: ${logo.height}px`);

      // 右侧文字区域
      const r = metadata.fujiRecipe || {};
      const exif = metadata.basicExif || {};

      const lineHeight = Math.round((barHeight - 2 * padding) / 4);
      const fontSize = Math.round(lineHeight * 0.8);
      const iconSize = Math.round(lineHeight * 0.8);
      const gapBetweenRows = padding / 4;

      // 图标字符映射
      const apertureIcon = 'Α';
      const shutterIcon = 'Β';
      const isoIcon = 'Γ';
      const highlightIconChar = 'ψ';
      const shadowIconChar = 'ω';
      const saturationIcon = 'φ';
      const dynamicRangeIcon = 'ώ';

      // 滤镜图标映射
      const filterIconMap = {
        'F0/Standard (Provia)': 'α',
        'F1b/Studio Portrait Smooth Skin Tone (Astia)': 'γ',
        'F2/Fujichrome (Velvia)': 'β',
        'F4/Velvia': 'β',
        'Classic Chrome': 'δ',
        'Pro Neg. Std': 'η',
        'Pro Neg. Hi': 'ζ',
        'Eterna': 'ό',
        'Bleach Bypass': 'ύ',
        'Classic Negative': 'θ',
        'Nostalgic Neg': 'ι',
        'Reala ACE': 'ε'
      };

      const filterIcon = filterIconMap[r.胶片模式] || 'α'; // Default to α if unmapped

      // 处理动态范围优先级显示逻辑
      let drPriorityDisplay = '';
      if (r.动态范围优先级 === 'Auto' && r.动态范围优先级自动值) {
        drPriorityDisplay = `DR-P ${r.动态范围优先级自动值}`;
      } else if (r.动态范围优先级 === 'Fixed' && r.动态范围优先级固定值) {
        drPriorityDisplay = `DR-P ${r.动态范围优先级固定值}`;
      }

      // Row 1: Aperture, Shutter, ISO
      const row1 = [
        exif.光圈 && `${exif.光圈}`,
        exif.快门 && `${exif.快门}`,
        exif.ISO && `ISO${exif.ISO}`
      ].filter(Boolean).join(' · ');

      // Row 2: Dynamic Range (or DR-P), Highlight, Shadow
      const row2 = [
        (r.动态范围优先级 === 'Auto' || r.动态范围优先级 === 'Fixed') ? drPriorityDisplay : `${dynamicRangeIcon} ${r.动态范围}`,
        (r.动态范围优先级 !== 'Auto' && r.动态范围优先级 !== 'Fixed' && r.高光色调 !== undefined && r.高光色调 !== null) ? `${highlightIconChar}${r.高光色调}` : null,
        (r.动态范围优先级 !== 'Auto' && r.动态范围优先级 !== 'Fixed' && r.阴影色调 !== undefined && r.阴影色调 !== null) ? `${shadowIconChar}${r.阴影色调}` : null
      ].filter(Boolean).join(' · ');

      // Row 3: White Balance, R offset, B offset
      const wbMap = {
        'Auto': 'Ζ',
        'Auto (white priority)': 'Η',
        'Auto (ambiance priority)': 'Ε',
        'Daylight': 'Ι',
        'Cloudy': 'Κ',
        'Daylight Fluorescent': 'Λ',
        'Day White Fluorescent': 'Μ',
        'Warm White Fluorescent': 'Μ',
        'White Fluorescent': 'Ν',
        'Living Room Warm White Fluorescent': 'Ν',
        'Incandescent': 'Ξ',
        'Underwater': 'Ο',
        'Custom4': 'Θ',
        'Custom5': 'Θ',
        'Custom': 'Ω',
        'Custom2': 'Ϊ',
        'Custom3': 'Ϋ',
        'Kelvin': 'Π'
      };

      const wb = r.白平衡;
      const wbIcon = wbMap[wb] || wb;

      const row3 = [
        wbIcon,
        `R${r.白平衡红轴调整}`,
        `B${r.白平衡蓝轴调整}`
      ].filter(Boolean).join(' · ');

      // Row 4: Saturation, Color Effect, Color FX Effect
      const row4 = [
        `${saturationIcon}${r.饱和度}`,
        `CCR ${r.彩色效果}`,
        `CCB ${r.彩色蓝调效果}`
      ].filter(Boolean).join(' · ');

      // Measure text widths to adjust positions
      ctx.font = `${fontSize}px 'FjallaOneIcon', sans-serif`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      const rowWidths = [
        ctx.measureText(row1).width,
        ctx.measureText(row2).width,
        ctx.measureText(row3).width,
        ctx.measureText(row4).width
      ];
      const maxTextWidth = Math.max(...rowWidths);

      // Measure filter icon width
      const filterIconSize = 4 * lineHeight;
      ctx.font = `${filterIconSize}px 'FjallaOneIcon', sans-serif`;
      const filterIconMetrics = ctx.measureText(filterIcon);
      const filterIconWidth = filterIconMetrics.width;

      // Calculate new rightX to keep icon within padding
      const totalWidth = maxTextWidth + gapBetweenRows + filterIconWidth;
      const rightX = canvas.width - padding - totalWidth + maxTextWidth;

      // Draw right-side text
      ctx.font = `${fontSize}px 'FjallaOneIcon', sans-serif`;
      ctx.fillStyle = '#1d191a';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';

      const textY = image.height + padding;
      const textY2 = textY + lineHeight;
      const textY3 = textY2 + lineHeight;
      const textY4 = textY3 + lineHeight;

      ctx.fillText(row1, rightX, textY);
      ctx.fillText(row2, rightX, textY2);
      ctx.fillText(row3, rightX, textY3);
      ctx.fillText(row4, rightX, textY4);

      // Draw filter icon
      ctx.font = `${filterIconSize}px 'FjallaOneIcon', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      const filterIconX = rightX + gapBetweenRows;
      const filterIconY = textY;
      ctx.fillText(filterIcon, filterIconX, filterIconY);

      // Debug: Log right-side and icon info
      console.log(`Right-side font size: ${fontSize}px`);
      console.log(`Line height: ${lineHeight}px`);
      console.log(`Max text width: ${maxTextWidth}px`);
      console.log(`Filter icon: ${filterIcon}`);
      console.log(`Filter icon size: ${filterIconSize}px`);
      console.log(`Filter icon width: ${filterIconWidth}px`);
      console.log(`Total width (text + gap + icon): ${totalWidth}px`);
      console.log(`New rightX: ${rightX}px`);
      console.log(`Filter icon X position: ${filterIconX}px`);
      console.log(`Filter icon Y position: ${filterIconY}px`);
      console.log(`Right padding boundary: ${canvas.width - padding}px`);

      // 导出
      const dataURL = canvas.toDataURL('image/jpeg', 0.9);
      const newImage = new Image();
      newImage.onload = () => resolve(newImage);
      newImage.onerror = () => reject(new Error('生成水印图片失败'));
      newImage.src = dataURL;
    } catch (err) {
      reject(err);
    }
  });
}

export { addWatermark };