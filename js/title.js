$(document).ready(function () {
    const masterTitleElement = document.querySelector('.main-title');

    const imgElement = document.createElement('img');
    imgElement.src = '../img/crossthebook.png';
    imgElement.alt = '책을건너';

    const linkElement = document.createElement('a');
    linkElement.href = '../html/mainPage.html';
    linkElement.appendChild(imgElement);

    masterTitleElement.innerHTML = '';
    masterTitleElement.appendChild(linkElement);

    //footer의 왼쪽 제목부분과 오른쪽 깃허브 아이콘부분에 하이퍼링크 설정
    let leftDiv=document.querySelector('.footer-left');
    let main=document.createElement('a');
    main.href='../html/mainPage.html';
    main.className='footer-link';
    main.textContent=leftDiv.textContent;
    leftDiv.textContent='';
    leftDiv.appendChild(main);
    let github = document.createElement('a');
    
    github.href = 'https://github.com/Cross-The-Book/Web';
    github.target = '_blank';
    
    github.className='footer-link';

    
    let img = document.querySelector('.footer-right');
    img.src='../img/github.png';
    let parentRight=img.parentNode;
    github.appendChild(img);
    parentRight.appendChild(github);
});
