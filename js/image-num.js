function addImgTitle(imgList) {
    for (let imgEl of imgList) {
        if (imgEl.title || imgEl.alt) {
            var imgTitle = document.createElement('p');
            imgTitle.innerHTML = imgEl.title?imgEl.title:imgEl.alt;
            imgEl.parentNode.appendChild(imgTitle);
        }

    }
}

function referImg(imgList) {
    var imgRefList = document.getElementsByTagName('a');
    for (let imgRefEl of imgRefList) {
        var imgRefTarget = null;
        if (imgRefEl.innerHTML == "下图") {
            for (let imgEl of imgList) {
                var position = imgRefEl.compareDocumentPosition(imgEl);
                if (position & 4) {
                    imgRefTarget = imgEl;
                    break;
                }
            }
        } else if (imgRefEl.innerHTML == "上图") {
            for (let imgEl of imgList) {
                var position = imgRefEl.compareDocumentPosition(imgEl);
                if (position & 2) {
                    imgRefTarget = imgEl;
                } else if (position & 4) {
                    break;
                }
            }
        }

        if (imgRefTarget) {
            var imgNumber = Array.prototype.indexOf.call(imgList, imgRefTarget)+1;
            imgRefEl.innerHTML = "图"+imgNumber;
            imgRefEl.href = "#图" + imgNumber;
            imgRefTarget.id = "图"+imgNumber;
        }
    }
}

() => {
    var imgList = document.getElementsByTagName('img');
    addImgTitle(imgList);
    referImg(imgList);
};