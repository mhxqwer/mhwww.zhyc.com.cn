// let adjust = document.querySelector('.shareFace').children
function changeFontSize(changeAmount) {
    let textElement = document.querySelector('.article_box').children
    console.log(textElement);
    for (let i = 0; i < textElement.length; i++) {
        var currentSize = parseInt(window.getComputedStyle(textElement[i]).fontSize); // 获取当前字体大小
        var newSize = currentSize + changeAmount;
        textElement[i].style.fontSize = newSize + 'px'; // 设置新的字体大小
    }


}