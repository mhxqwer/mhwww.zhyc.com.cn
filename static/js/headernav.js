// function getHeader() {
//     // const headerList = ['热点聚焦', '英才党建', '地方新闻', '英才人物', '名校名师','礼赞科学家',  '企业旗舰', '直通文旅', '品牌展示', '思想理论', '两会专栏', '专题报道', '乡村振兴', '名院名医', '新质生产力', '期刊电子版', '健康中国', '文艺评论'];
//     // const header = document.querySelector('.header_nav')
//     // // 头部导航
//     // headerList.forEach((item, index) => {
//     //     const li = document.createElement('li')
//     //     li.setAttribute('class', 'header_li')
//     //     li.textContent = `${headerList[index]}`
//     //     li.addEventListener('click', function (e) {
//     //         localStorage.setItem('detail1', e.target.innerText)
//     //         window.location.href = '/pages/detail_page/detail_page.html'
//     //     })
//     //     header.appendChild(li)
//     // });
//     const header = document.querySelector('.header_nav').children
//     console.log(header);
//     for (let i = 0; i < header.length; i++) {
//         if (header[i].innerText.length > 4) {
//             // header[i].style.paddingLeft = '10px'
//         }
//         header[i].addEventListener('click', function (e) {
//             localStorage.setItem('detail1', e.target.innerText)
//         })

//     }
// }
// getHeader()