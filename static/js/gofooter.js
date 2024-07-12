function goFooter(num) {
    localStorage.setItem('footerTab', num)
    switch (num) {
        case 0:
            window.location.href = '/pages/introduce/introduce.html'
            break;
        case 1:
            window.location.href = '/pages/invite/invite.html'
            break;
        case 2:
            window.location.href = '/pages/advertising/advertising.html'
            break;
        case 3:
            window.location.href = '/pages/counselor/counselor.html'
            break;

        case 4:
            window.location.href = '/pages/contactUs/contactUs.html'
            break;
        case 5:
            window.location.href = '/pages/personnel/personnel.html'
            break;

        default:
            break;
    }
}