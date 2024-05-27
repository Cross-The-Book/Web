document.addEventListener("DOMContentLoaded", function() {
    // 평점 표시 코드
    const ratingElement = document.getElementById('rating');
    const ratingValue = 3.5; // 표시할 평점 값

    function displayRating(rating) {
        const maxRating = 5;
        for (let i = 1; i <= maxRating; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            
            if (i <= rating) {
                star.innerHTML = '&#9733;'; // 채워진 별
                star.classList.add('filled'); // 채워진 별에 클래스 추가
            } else if (i - rating < 1) {
                star.innerHTML = '&#9733;'; // 반 채워진 별 (이 부분은 추가 로직이 필요하지만, 여기서는 간단히 채워진 별로 처리)
                star.classList.add('filled'); // 채워진 별에 클래스 추가
            } else {
                star.innerHTML = '&#9734;'; // 빈 별
            }

            ratingElement.appendChild(star);
        }
    }

    displayRating(ratingValue);

    // 가격 설정 코드
    const priceElement = document.getElementById('price');
    const price = "가격: 10000원";
    priceElement.textContent = price;

    // 구매 버튼 클릭 이벤트 설정
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', function() {
        alert('구매 버튼이 클릭되었습니다!');
    });
});
