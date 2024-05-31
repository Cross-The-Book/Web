$(document).ready(function () {
    // menu_item 클래스에 해당하는 모든 요소를 선택합니다.
    const menuItems = document.querySelectorAll('.menu_item a');

    // 각 메뉴 항목에 대해 href 속성을 설정합니다.
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