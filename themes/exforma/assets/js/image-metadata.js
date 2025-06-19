const TAG_ID_FILM_MODE = 0x1401;
const FILM_MODE_VALUES = {
  0x0: 'F0/Standard (Provia)', 0x100: 'F1/Studio Portrait', 0x110: 'F1a/Studio Portrait Enhanced Saturation',
  0x120: 'F1b/Studio Portrait Smooth Skin Tone (Astia)', 0x130: 'F1c/Studio Portrait Increased Sharpness',
  0x200: 'F2/Fujichrome (Velvia)', 0x300: 'F3/Studio Portrait Ex', 0x400: 'F4/Velvia',
  0x500: 'Pro Neg. Std', 0x501: 'Pro Neg. Hi', 0x600: 'Classic Chrome', 0x700: 'Eterna',
  0x800: 'Classic Negative', 0x900: 'Bleach Bypass', 0xA00: 'Nostalgic Neg', 0xB00: 'Reala ACE'
};
const TAG_ID_GRAIN_EFFECT_ROUGHNESS = 0x1047;
const GRAIN_EFFECT_ROUGHNESS_VALUES = { 0x0: 'Off', 0x20: 'Weak', 0x40: 'Strong' };
const TAG_ID_GRAIN_EFFECT_SIZE = 0x104C;
const GRAIN_EFFECT_SIZE_VALUES = { 0x0: 'Off', 0x10: 'Small', 0x20: 'Large' };
const TAG_ID_COLOR_CHROME_EFFECT = 0x1048;
const COLOR_CHROME_EFFECT_VALUES = { 0x0: 'Off', 0x20: 'Weak', 0x40: 'Strong' };
const TAG_ID_COLOR_CHROME_FX_BLUE = 0x104E;
const COLOR_CHROME_FX_BLUE_VALUES = { 0x0: 'Off', 0x20: 'Weak', 0x40: 'Strong' };
const TAG_ID_WHITE_BALANCE = 0x1002;
const WHITE_BALANCE_VALUES = {
  0x0: 'Auto', 0x1: 'Auto (white priority)', 0x2: 'Auto (ambiance priority)', 0x100: 'Daylight',
  0x200: 'Cloudy', 0x300: 'Daylight Fluorescent', 0x301: 'Day White Fluorescent', 0x302: 'White Fluorescent',
  0x303: 'Warm White Fluorescent', 0x304: 'Living Room Warm White Fluorescent', 0x400: 'Incandescent',
  0x500: 'Flash', 0x600: 'Underwater', 0xF00: 'Custom', 0xF01: 'Custom2', 0xF02: 'Custom3',
  0xF03: 'Custom4', 0xF04: 'Custom5', 0xFF0: 'Kelvin'
};
const TAG_ID_COLOR_TEMPERATURE = 0x1005;
const TAG_ID_WHITE_BALANCE_FINE_TUNE = 0x100A;
const TAG_ID_DYNAMIC_RANGE_SETTING = 0x1402;
const DYNAMIC_RANGE_SETTING_VALUES = {
  0x0: 'Auto', 0x1: 'Manual', 0x100: 'Standard (100%)', 0x200: 'Wide1 (230%)', 0x201: 'Wide2 (400%)', 0x8000: 'Film Simulation'
};
const TAG_ID_DEVELOPMENT_DYNAMIC_RANGE = 0x1403;
const TAG_ID_HIGHLIGHT_TONE = 0x1041;
const TONE_VALUES = {
  '-64': '+4', '-56': '+3.5', '-48': '+3', '-40': '+2.5', '-32': '+2', '-24': '+1.5', '-16': '+1', '-8': '+0.5',
  '0': '0',
  '8': '-0.5', '16': '-1', '24': '-1.5', '32': '-2', '40': '-2.5', '48': '-3', '56': '-3.5', '64': '-4'
};
const TAG_ID_SHADOW_TONE = 0x1040;
const TAG_ID_SATURATION = 0x1003;
const SATURATION_VALUES = {
  0x0: '0', 0x80: '+1', 0xC0: '+3', 0xE0: '+4', 0x100: '+2', 0x180: '-1', 0x400: '-2', 0x4C0: '-3', 0x4E0: '-4',
  0x200: 'Low', 0x300: 'None (B&W)', 0x301: 'B&W Red Filter', 0x302: 'B&W Yellow Filter', 0x303: 'B&W Green Filter',
  0x310: 'B&W Sepia', 0x500: 'Acros', 0x501: 'Acros Red Filter', 0x502: 'Acros Yellow Filter', 0x503: 'Acros Green Filter', 0x8000: 'Film Simulation'
};
const TAG_ID_SHARPNESS = 0x1001;
const SHARPNESS_VALUES = { 0x0: '-4', 0x1: '-3', 0x2: '-2', 0x3: '0', 0x4: '+2', 0x5: '+3', 0x6: '+4', 0x82: '-1', 0x84: '+1', 0x8000: 'Film Simulation', 0xFFFF: 'n/a' };
const TAG_ID_NOISE_REDUCTION = 0x100E;
const NOISE_REDUCTION_VALUES = { 0x0: '0', 0x100: '+2', 0x180: '+1', 0x1C0: '+3', 0x1E0: '+4', 0x200: '-2', 0x280: '-1', 0x2C0: '-3', 0x2E0: '-4' };
const TAG_ID_CLARITY = 0x100F;
const CLARITY_VALUES = { '-5000': '-5', '-4000': '-4', '-3000': '-3', '-2000': '-2', '-1000': '-1', '0': '0', '1000': '+1', '2000': '+2', '3000': '+3' };

// New DRangePriority related tags
const TAG_ID_DRANGE_PRIORITY = 0x1443;
const TAG_ID_DRANGE_PRIORITY_FIXED = 0x1444;
const TAG_ID_DRANGE_PRIORITY_AUTO = 0x1445;


const DRANGE_PRIORITY_VALUES = {
  0x0: 'Auto',
  0x1: 'Fixed'
};

const DRANGE_PRIORITY_FIXED_VALUES = {
  0x0: 'Off',
  0x1: 'Weak',
  0x2: 'Strong'
};

const DRANGE_PRIORITY_AUTO_VALUES = {
  0x0: 'Off',
  0x1: 'Weak',
  0x2: 'Strong',
  0x3: 'Plus'
};

const tags = {
  [TAG_ID_FILM_MODE]: { name: 'FilmMode', parser: (input) => FILM_MODE_VALUES[input] },
  [TAG_ID_GRAIN_EFFECT_ROUGHNESS]: { name: 'GrainEffectRoughness', parser: (input) => GRAIN_EFFECT_ROUGHNESS_VALUES[input] },
  [TAG_ID_GRAIN_EFFECT_SIZE]: { name: 'GrainEffectSize', parser: (input) => GRAIN_EFFECT_SIZE_VALUES[input] },
  [TAG_ID_COLOR_CHROME_EFFECT]: { name: 'ColorChromeEffect', parser: (input) => COLOR_CHROME_EFFECT_VALUES[input] },
  [TAG_ID_COLOR_CHROME_FX_BLUE]: { name: 'ColorChromeFxBlue', parser: (input) => COLOR_CHROME_FX_BLUE_VALUES[input] },
  [TAG_ID_WHITE_BALANCE]: { name: 'WhiteBalance', parser: (input) => WHITE_BALANCE_VALUES[input] },
  [TAG_ID_COLOR_TEMPERATURE]: { name: 'ColorTemperature', parser: (input) => input },
  [TAG_ID_WHITE_BALANCE_FINE_TUNE]: {
    name: 'WhiteBalanceFineTune',
    parser: (input, uint8Array) => {
      const view = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
      return [view.getInt32(input, true), view.getInt32(input + 4, true)];
    }
  },
  [TAG_ID_DYNAMIC_RANGE_SETTING]: { name: 'DynamicRangeSetting', parser: (input) => DYNAMIC_RANGE_SETTING_VALUES[input] },
  [TAG_ID_DEVELOPMENT_DYNAMIC_RANGE]: { name: 'DevelopmentDynamicRange', parser: (input) => input },
  [TAG_ID_HIGHLIGHT_TONE]: { name: 'HighlightTone', parser: (input) => TONE_VALUES[input] },
  [TAG_ID_SHADOW_TONE]: { name: 'ShadowTone', parser: (input) => TONE_VALUES[input] },
  [TAG_ID_SATURATION]: { name: 'Saturation', parser: (input) => SATURATION_VALUES[input] },
  [TAG_ID_SHARPNESS]: { name: 'Sharpness', parser: (input) => SHARPNESS_VALUES[input] },
  [TAG_ID_NOISE_REDUCTION]: { name: 'NoiseReduction', parser: (input) => NOISE_REDUCTION_VALUES[input] },
  [TAG_ID_CLARITY]: { name: 'Clarity', parser: (input) => CLARITY_VALUES[input] },
  // New DRangePriority related tag parsers
  [TAG_ID_DRANGE_PRIORITY]: { name: 'DRangePriority', parser: (input) => DRANGE_PRIORITY_VALUES[input] },
  [TAG_ID_DRANGE_PRIORITY_FIXED]: { name: 'DRangePriorityFixed', parser: (input) => DRANGE_PRIORITY_FIXED_VALUES[input] },
  [TAG_ID_DRANGE_PRIORITY_AUTO]: { name: 'DRangePriorityAuto', parser: (input) => DRANGE_PRIORITY_AUTO_VALUES[input] },
};

function formatWhiteBalanceFineTune(value) {
  return value > 0 ? `+${value / 10}` : `${value / 10}`;
}

function format(parsed) {
  if (!parsed.FilmMode) return null;
  const result = {
    FilmMode: parsed.FilmMode,
    GrainEffectRoughness: parsed.GrainEffectRoughness,
    GrainEffectSize: parsed.GrainEffectSize,
    ColorChromeEffect: parsed.ColorChromeEffect,
    ColorChromeFxBlue: parsed.ColorChromeFxBlue,
    WhiteBalance: parsed.WhiteBalance,
    Red: '0',
    Blue: '0',
    DynamicRange: parsed.DynamicRangeSetting,
    DRangePriority: parsed.DRangePriority,
    DRangePriorityFixed: parsed.DRangePriorityFixed,
    DRangePriorityAuto: parsed.DRangePriorityAuto,
    HighlightTone: parsed.HighlightTone,
    ShadowTone: parsed.ShadowTone,
    Saturation: parsed.Saturation,
    Sharpness: parsed.Sharpness,
    NoiseReduction: parsed.NoiseReduction,
    Clarity: parsed.Clarity
  };
  const whiteBalanceFineTune = parsed.WhiteBalanceFineTune;
  if (whiteBalanceFineTune) {
    result.Red = formatWhiteBalanceFineTune(whiteBalanceFineTune[0]);
    result.Blue = formatWhiteBalanceFineTune(whiteBalanceFineTune[1]);
  }
  const whiteBalance = parsed.WhiteBalance;
  const colorTemperature = parsed.ColorTemperature;
  if (whiteBalance === WHITE_BALANCE_VALUES[0xFF0]) {
    result.WhiteBalance = `${colorTemperature}K`;
  }
  const dynamicRangeSetting = parsed.DynamicRangeSetting;
  const developmentRange = parsed.DevelopmentDynamicRange;
  if (dynamicRangeSetting === DYNAMIC_RANGE_SETTING_VALUES[1]) {
    result.DynamicRange = `DR${developmentRange}`;
  }
  return result;
}

function parse(makerNote) {
  const result = {};
  parseFujifilmMakerNote(makerNote, (tagId, value) => {
    const tag = tags[tagId];
    if (tag) {
      const parsedValue = tag.parser(value, makerNote);
      result[tag.name] = parsedValue;
    }
  });
  return result;
}

const BYTE_INDEX_TAG_COUNT = 12;
const BYTE_INDEX_FIRST_TAG = 14;
const BYTES_PER_TAG = 12;
const BYTE_OFFSET_TAG_TYPE = 2;
const BYTE_OFFSET_TAG_VALUE = 8;

function parseFujifilmMakerNote(uint8Array, valueForTagUInt) {
  const view = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
  const tagCount = view.getUint16(BYTE_INDEX_TAG_COUNT, true);
  for (let i = 0; i < tagCount; i++) {
    const index = BYTE_INDEX_FIRST_TAG + i * BYTES_PER_TAG;
    if (index + BYTES_PER_TAG < uint8Array.length) {
      const tagId = view.getUint16(index, true);
      const tagType = view.getUint16(index + BYTE_OFFSET_TAG_TYPE, true);
      switch (tagType) {
        case 3: valueForTagUInt(tagId, view.getUint16(index + BYTE_OFFSET_TAG_VALUE, true)); break;
        case 4: valueForTagUInt(tagId, view.getUint32(index + BYTE_OFFSET_TAG_VALUE, true)); break;
        case 9: valueForTagUInt(tagId, view.getInt32(index + BYTE_OFFSET_TAG_VALUE, true)); break;
      }
    }
  }
}

function getRecipe(makerNote) {
  if (!(makerNote instanceof Uint8Array)) return null;
  return format(parse(makerNote));
}

function formatShutter(exposureTime, shutterSpeedValue) {
  let final = exposureTime;
  if ((!final || final <= 0) && typeof shutterSpeedValue === "number") final = Math.pow(2, -shutterSpeedValue);
  if (!final || final <= 0) return "未知";
  if (final >= 1) return `${final.toFixed(1)}s`;
  const candidates = [1, 2, 3, 4, 5, 6, 8, 10, 13, 15, 20, 25, 30, 40, 50, 60, 80, 100, 125, 160, 200, 250, 320, 400, 500, 640, 800, 1000, 1600, 2000, 4000, 8000];
  let closest = candidates.reduce((a, b) => Math.abs(1 / a - final) < Math.abs(1 / b - final) ? a : b);
  return `1/${closest}s`;
}

function extractModelName(raw) {
  if (!raw) return "未知";
  const match = raw.match(/(X-[\w\d]+|GFX[\w\d]+)/i);
  return match ? match[1].toUpperCase() : raw.trim();
}

// Add the new function
function formatLensInfo(lensModel, lensMake) {
  if (!lensModel) return "未知";
  
  // 如果已经有镜头厂家信息，直接返回
  if (lensMake && !new RegExp(`^${lensMake}`, 'i').test(lensModel)) {
    return `${lensMake} ${lensModel}`;
  }
  
  return lensModel;
}

async function getImageMetadata(file) {
  if (!(file instanceof File)) {
    throw new Error("请输入有效的图片文件");
  }

  const image = new Image();
  const url = URL.createObjectURL(file);
  try {
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject(new Error("无效的图片文件"));
      image.src = url;
    });

    const metadata = await exifr.parse(file, { tiff: true, ifd0: true, exif: true, makerNote: true });
    const modelRaw = `${metadata?.Make || ""} ${metadata?.Model || ""}${metadata?.Software ? "（" + metadata.Software + "）" : ""}`.trim();
    const cameraModel = extractModelName(modelRaw);

    const generalInfo = {
      文件名: file.name,
      尺寸: `${image.width} × ${image.height}`,
      大小: `${(file.size / 1024).toFixed(2)} KB`
    };

    const basicExif = {
      拍摄时间: (metadata?.DateTimeOriginal || metadata?.CreateDate)?.toLocaleString() || "未知",
      相机: cameraModel || "未知",
      描述信息: metadata?.ImageDescription || metadata?.Artist || metadata?.Copyright || "无",
      光圈: metadata?.FNumber ? `f/${metadata.FNumber}` : "未知",
      快门: formatShutter(metadata?.ExposureTime, metadata?.ShutterSpeedValue),
      ISO: metadata?.ISO || "未知",
      镜头: formatLensInfo(metadata?.LensModel, metadata?.LensMake) || "未知"
    };

    let fujiRecipe = {};
    if (/^X-|^GFX/i.test(cameraModel) && metadata?.makerNote instanceof Uint8Array) {
      const recipe = getRecipe(metadata.makerNote);
      if (recipe) {
        fujiRecipe = {
          胶片模式: recipe.FilmMode,
          动态范围: recipe.DynamicRange,
          动态范围优先级: recipe.DRangePriority,
          动态范围优先级固定值: recipe.DRangePriorityFixed,
          动态范围优先级自动值: recipe.DRangePriorityAuto,
          白平衡: recipe.WhiteBalance,
          白平衡红轴调整: recipe.Red,
          白平衡蓝轴调整: recipe.Blue,
          高光色调: recipe.HighlightTone,
          阴影色调: recipe.ShadowTone,
          饱和度: recipe.Saturation,
          锐度: recipe.Sharpness,
          降噪: recipe.NoiseReduction,
          清晰度: recipe.Clarity,
          颗粒效果粗糙度: recipe.GrainEffectRoughness,
          颗粒效果大小: recipe.GrainEffectSize,
          彩色效果: recipe.ColorChromeEffect,
          彩色蓝调效果: recipe.ColorChromeFxBlue
        };
      }
    }

    return {
      generalInfo,
      basicExif,
      fujiRecipe
    };
  } catch (err) {
    throw new Error(`读取失败：${err.message || err}`);
  } finally {
    URL.revokeObjectURL(url);
  }
}

export { getImageMetadata };