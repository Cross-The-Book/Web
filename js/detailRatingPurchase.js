
document.addEventListener('DOMContentLoaded', function () {
    const ratingElement = document.getElementById('rating');
    const ratingValue = rating; 
    
    
    const valueSpan = document.createElement('span');
    valueSpan.textContent = ratingValue;
    
    valueSpan.style.fontSize = '1.5em'; 
    
    
    const slashFiveSpan = document.createElement('span');
    slashFiveSpan.textContent = '/5';
    
    slashFiveSpan.style.color = 'gray';
    
    
    const starsContainer = document.createElement('div');
    starsContainer.style.display = 'inline-block'; 
    starsContainer.style.marginLeft = '50px';
    
    
    ratingElement.appendChild(valueSpan);
    ratingElement.appendChild(slashFiveSpan);
    ratingElement.appendChild(starsContainer); 
    
    function displayRating(rating) {
        const maxRating = 5;
        starsContainer.innerHTML = ''; 
        for (let i = 1; i <= maxRating; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
    
            if (i <= rating) {
                star.innerHTML = '&#9733;'; // 채워진 별
                star.classList.add('filled')
            } else if (i - rating < 1) {
                star.innerHTML = '&#9733;';
                star.classList.add('half-filled');
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
