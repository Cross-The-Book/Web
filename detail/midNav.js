const nav=document.querySelector('.lists');
const navTop=nav.offsetTop;
const navbarWapper=document.querySelector('.lists_wrapper');
function fixNav(){
    if(window.scrollY >= navTop){
        nav.classList.add('fixed-nav');
        navbarWapper.style.height=nav.offsetHeight+'px';
    }else{
        nav.classList.remove('fixed-nav');
        navbarWapper.style.height='auto';
    }
}

window.addEventListener('scroll',fixNav);


/* document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.lists');
    var scrollPosition = window.scrollY;
    var stickyClass = 'is-sticky';

    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;

        if (scrollPosition > 100) { // 100px 이상 스크롤했을 때
            header.classList.add(stickyClass);
        } else {
            header.classList.remove(stickyClass);
        }
    });
}); */

/* document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var tablePosition = document.getElementById('table').offsetTop;
    var storyPosition = document.getElementById('story').offsetTop;
    var recommendBooksPosition = document.getElementById('recommend_books').offsetTop;
    
    var linkTable = document.querySelector('.lists_item a[href="#table"]');
    var linkStory = document.querySelector('.lists_item a[href="#story"]');
    var linkRecommendBooks = document.querySelector('.lists_item a[href="#recommend_books"]');
    
    // 각 섹션의 위치에 따라 active 클래스 추가 또는 제거
    if (scrollPosition >= tablePosition && scrollPosition < storyPosition) {
        linkTable.classList.add('active');
    } else {
        linkTable.classList.remove('active');
    }
    
    if (scrollPosition >= storyPosition && scrollPosition < recommendBooksPosition) {
        linkStory.classList.add('active');
    } else {
        linkStory.classList.remove('active');
    }
    
    if (scrollPosition >= recommendBooksPosition) {
        linkRecommendBooks.classList.add('active');
    } else {
        linkRecommendBooks.classList.remove('active');
    }
});
 */