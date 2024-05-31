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