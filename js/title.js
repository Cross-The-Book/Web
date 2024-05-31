$(document).ready(function() {
    // master-title 클래스를 가진 요소 선택
    const masterTitleElement = document.querySelector('.main-title');

    // 새로운 img 요소 생성
    const imgElement = document.createElement('img');
    imgElement.src = '../crossthebook.png'; // 이미지의 소스 설정
    imgElement.alt = '책을건너'; // 대체 텍스트 설정

    // 새로운 a 요소 생성
    const linkElement = document.createElement('a');
    linkElement.href = '../html/mainPage.html'; // 링크할 페이지 설정

    // img 요소를 a 요소 안에 넣기
    linkElement.appendChild(imgElement);

    // 기존 텍스트를 삭제하고 이미지 링크 삽입
    masterTitleElement.innerHTML = ''; // 기존 내용을 비웁니다.
    masterTitleElement.appendChild(linkElement); // 생성한 a 요소를 master-title 요소에 추가
});
