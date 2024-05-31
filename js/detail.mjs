import { allBookData } from "./books.js";
const urlParams = new URLSearchParams(window.location.search);
const bookData = JSON.parse(decodeURIComponent(urlParams.get('book')));

document.addEventListener('DOMContentLoaded', function () {
    console.log(bookData);
    updateTag(bookData);
    updateContent(bookData);
    recommendBook(allBookData);
    clickButton();

});

function updateContent(bookdata) {
    document.querySelector('.img').src = bookdata.img;
    document.querySelector('.book_name').textContent = bookdata.title;
    document.querySelector('.book_writer').textContent = bookdata.author;
    showStar(bookdata.rating);
    document.getElementById('sale_price').textContent = bookdata.price;
    document.getElementById('table_content').innerHTML = bookdata.index;
    console.log(bookdata.index);
    document.querySelector('.story').innerHTML = bookdata.story;
    document.getElementById('publisher_review').innerHTML = bookdata.publisherReview;
    document.querySelector('.video').src = bookdata.video;
}
function updateTag(bookdata){
  var ul = document.querySelector('.tag_list');
  ul.innerHTML = '';

  bookdata.tag.forEach(function(tag) {
    var li = document.createElement('li');
    li.className = 'tag_item';
    li.textContent = tag;
    ul.appendChild(li);
  });
}
function recommendBook(allBookData) {
    const randomIndices = new Set();
    while (randomIndices.size < 3) {
        randomIndices.add(Math.floor(Math.random() * allBookData.length));
    }

    const recommendContent = document.querySelector('.recommend_content');
    recommendContent.innerHTML = '';

    randomIndices.forEach(recommend => {
        console.log(recommend);
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<a href="../html/detail.html?book=${encodeURIComponent(JSON.stringify(allBookData[recommend]))}">
        <img src="${allBookData[recommend].img}" alt="어떻게 살 것인가"><a>
                    <p>${allBookData[recommend].title}</p>
        `;
        bookDiv.classList.add('recommend_book_item');
        recommendContent.appendChild(bookDiv);
    })
}

function showStar(rating) {
    const ratingElement = document.getElementById('rating');
    const ratingValue = rating;

    const valueSpan = document.createElement('span');
    valueSpan.textContent = ratingValue;

    valueSpan.style.fontSize = '1.5em';

    const slashFiveSpan = document.createElement('span');
    slashFiveSpan.textContent = '/10';

    slashFiveSpan.style.color = 'gray';

    const starsContainer = document.createElement('div');
    starsContainer.style.display = 'inline-block';
    starsContainer.style.marginLeft = '50px';


    ratingElement.appendChild(valueSpan);
    ratingElement.appendChild(slashFiveSpan);
    ratingElement.appendChild(starsContainer);

    function displayRating(rating) {
        rating /= 2;
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
}

function clickButton() {
    // 구매 버튼 클릭 이벤트 설정
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', function () {
        alert('구매 버튼이 클릭되었습니다!');
    });
}

export const rating = bookData.rating