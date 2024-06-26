import { mainpage } from "./books.js";
document.addEventListener('DOMContentLoaded', function () {
    updateContent(mainpage);
});
function updateContent(mainpage) {
    const contentContainer = document.getElementById('book-container');
    const todayBookContainer = document.getElementById('today-book-container')
    contentContainer.innerHTML = '';

    mainpage.forEach((book) => {
        const section = document.createElement('section');
        section.className = 'main-section';

        section.innerHTML = `
            <article class="article">
                <div class="article-header">
                    <h1 class="article-title">NEW!</h1>
                    <p></p>
                </div>
                <div class="article-body">
                <a href="../html/detail.html?book=${encodeURIComponent(JSON.stringify(book))}">
                <img src="${book.img}" width="250" height="400" alt="${book.title}">
                </a><br><br>
                    <h3 class="article-title">${book.title}</h1>
                    <p>작가: ${book.author}</p>
                    <p>평점: ${book.rating}</p>
                    <p>가격: ${book.price}</p>
                </div>
            </article>
        `;

        contentContainer.appendChild(section);
    });

    const todaySection = document.createElement('section')
    todaySection.className = 'today-main-section';
    todaySection.innerHTML = `
    <article class="today-book">
    <a href="../html/detail.html?book=${encodeURIComponent(JSON.stringify(mainpage[0]))}">
            <img src=${mainpage[0].img} width="150" height="300">
        </a>
        <div class="today-book-details">
            <div class="article-header">
                <h1 class="article-title">오늘의 책</h1>
            </div>
            <div class="article-body">
                <h3>${mainpage[0].title}</h3>
                <p>생을 끝내는 것이 유일한 희망이었던 주인공, 다른 삶을 선택했다면 어떤 결과가 나왓을까?
                    후회와 잘못된 선택을 반복하는 이 책은 선물과 같다.
                </p>
                <p>작가: ${mainpage[0].author}</p>
                <p>평점: ${mainpage[0].rating}</p>
                <div id="rate-book-section">
                    <h2>오늘의 책을 평가하면?</h2>
                    <form id="rate-book-form">
                        <label for="rating">평점:</label>
                        <input type="number" id="rating" name="rating" min="1" max="10" required>
                        <button type="submit">평점 남기기</button>
                    </form>
                    <div id="user-rating"></div>
                </div>
            </div>
        </div>

    </article>`
    todayBookContainer.appendChild(todaySection);
}