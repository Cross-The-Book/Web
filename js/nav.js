$(document).ready(function () {
    const menuItems = document.querySelectorAll('.menu_item a');

    //각 네비게이션의 item에 하이퍼링크 설정
    menuItems.forEach((item, index) => {
        switch (index) {
            case 0:
                item.href = '../html/bestseller.html';
                break;
            case 1:
                item.href = '../html/steadyseller.html';
                break;
            case 2:
                item.href = '../html/thismonth.html';
                break;
            case 3:
                item.href = '../html/category.html';
                break;
            default:
                console.log('Unknown menu item index:', index);
        }
    });
});