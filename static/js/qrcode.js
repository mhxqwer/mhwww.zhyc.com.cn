let Qcode_box = document.querySelector('.Qcode_box')
let url = window.location.pathname; //获取url中"?"符后的字串
let urlArr = url.split('.')
let sUrl = urlArr[0].split('/')
let id = sUrl[sUrl.length - 1]
let cat_id = sUrl[sUrl.length - 2]
console.log('sUrl:', sUrl.length);
console.log(id, cat_id);
jQuery('#qrcode').qrcode({ width: 120, height: 120, text: `https://www.zhyc.com.cn/h5/pages/content/content?cat_id=${cat_id}&&id=${id}` });
function getQCode(event) {
    event.cancelBubble = true
    Qcode_box.style.display = 'block'
    // console.log(Qcode_box);

    // document.addEventListener('click',function(){
    //     Qcode_box.style.display = 'none'
    // })

}

// 点击整个界面关闭弹窗 
document.onclick = function () {
    event.stopPropagation()
    Qcode_box.style.display = "none";
} 