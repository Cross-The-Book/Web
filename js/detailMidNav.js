window.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.lists');
    const navTop = nav.offsetTop;
    const navbarWapper = document.querySelector('.lists_wrapper');
  
    function fixNav() {
      if (window.pageYOffset >= navTop) {
        nav.classList.add('fixed-nav');
        navbarWapper.style.height = nav.offsetHeight + 'px';
        nav.style.transition = 'top 0.3s ease-in-out'; // 애니메이션 추가
        nav.style.top = '0'; // 상단에 고정되도록 설정
      } else {
        nav.classList.remove('fixed-nav');
        navbarWapper.style.height = 'auto';
        nav.style.transition = 'top 0.3s ease-in-out'; // 애니메이션 추가
        nav.style.top = '-' + nav.offsetHeight + 'px'; // 상단에서 nav 높이만큼 올라가도록 설정
      }
    }
  
    window.addEventListener('scroll', fixNav);
  });
  