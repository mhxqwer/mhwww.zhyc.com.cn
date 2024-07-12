if (window.screen.width < 500) {
    this.getUrlParams()
    // console.log(1111)
};
function getUrlParams() {
    let url = window.location.pathname; //获取url中"?"符后的字串
    let urlArr = url.split('.')
    let sUrl = urlArr[0].split('/')
    let id = sUrl[sUrl.length - 1]
    let cat_id = sUrl[sUrl.length - 2]
    console.log('sUrl:', sUrl.length);
    console.log(id, cat_id);
    window.location.href = `https://www.zhyc.com.cn/h5/pages/content/content?cat_id=${cat_id}&id=${id}`
    // let paramsObj = new Object();
    // if (url.indexOf("/") != -1) {
    // 	let str = url.substr(1);
    //     console.log('str:',str);
    // 	str = str.split("&");
    // 	for (let i = 0; i < str.length; i++) {

    // 		paramsObj[str[i].split("=")[0]] = decodeURI(str[i].split("=")[1]);

    // 	}
    // }
    // return paramsObj;
}
// let type = getUrlParams().type; // 12
// let title = getUrlParams().title; // abc
// console.log(type,title);
