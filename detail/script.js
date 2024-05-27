document.addEventListener("DOMContentLoaded", function () {
    const ratingElement = document.getElementById('rating');
    const ratingValue = 3.5; // 표시할 평점 값
    
    // 평점 값에 대한 span 요소 생성
    const valueSpan = document.createElement('span');
    valueSpan.textContent = ratingValue;
    // 평점 값 스타일 설정
    valueSpan.style.fontSize = '1.5em'; // 텍스트 크기 증가
    
    // "/5"에 대한 span 요소 생성
    const slashFiveSpan = document.createElement('span');
    slashFiveSpan.textContent = '/5';
    // "/5" 스타일 설정
    slashFiveSpan.style.color = 'gray';
    
    // 별들을 담을 새로운 div 생성
    const starsContainer = document.createElement('div');
    starsContainer.style.display = 'inline-block'; // 같은 행에 표시되도록 설정
    starsContainer.style.marginLeft = '50px'; // 평점 텍스트와 별 사이의 간격 설정
    
    // ratingElement에 생성된 요소들 추가
    ratingElement.appendChild(valueSpan);
    ratingElement.appendChild(slashFiveSpan);
    ratingElement.appendChild(starsContainer); // 별들을 담을 div 추가
    
    function displayRating(rating) {
        const maxRating = 5;
        starsContainer.innerHTML = ''; // 별을 다시 그리기 전에 container를 비웁니다.
        for (let i = 1; i <= maxRating; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
    
            if (i <= rating) {
                star.innerHTML = '&#9733;'; // 채워진 별
                star.classList.add('filled')
            } else if (i - rating < 1) {
                // 반 별을 표시하는 로직이 필요합니다. 하지만 직접적인 HTML 엔티티는 없으므로,
                // 여기서는 채워진 별로 간단히 처리합니다.
                // 실제 구현에서는 CSS를 이용하여 별의 절반만 채우는 방식을 사용할 수 있습니다.
                star.innerHTML = '&#9733;'; // 반 채워진 별의 대략적인 표현
                star.classList.add('half-filled'); // 반 채워진 별에 'half-filled' 클래스 추가
            } else {
                star.innerHTML = '&#9734;'; // 빈 별
            }
    
            starsContainer.appendChild(star);
        }
    }
    
    
    // 평점 표시 함수 실행
    displayRating(ratingValue);

    // 가격 설정 코드
    const priceElement = document.getElementById('sale_price');
    const price = "10,000원";
    priceElement.textContent = price;

    // 구매 버튼 클릭 이벤트 설정
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', function () {
        alert('구매 버튼이 클릭되었습니다!');
    });
});
