const books = [
    { title: '미드나잇 라이브러리', author: '매트 헤이그', rating: 9.5, price: '14,220원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/9/3/7/349129937g.jpg' },
    { title: '나를 소모하지 않는 현명한 태도에 관하여', author: '마티아스 뇔케', rating: 9.6, price: '16,020원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/7/1/5/356882715g.jpg' },
    { title: '변방에서 중심으로', author: '문재인, 최종건', rating: 6.4, price: '29,700원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/6/0/6/356910606s.jpg' }
];

function updateContent() {
    const contentContainer = document.getElementById('book-container');
    const todayBookContainer=document.getElementById('today-book-container')
    contentContainer.innerHTML = ''; // 기존 내용을 초기화

    books.forEach((book) => { // 여기서 'books' 배열을 순회합니다.
        const section = document.createElement('section');
        section.className = 'main-section';

        section.innerHTML = `
            <article class="article">
                <div class="article-header">
                    <h1 class="article-title">NEW!</h1>
                    <p></p>
                </div>
                <div class="article-body">
                    <img src="${book.img}" width="250" height="400" alt="${book.title}">
                    <br><br>
                    <h3 class="article-title">${book.title}</h1>
                    <p>작가: ${book.author}</p>
                    <p>평점: ${book.rating}</p>
                    <p>가격: ${book.price}</p>
                </div>
            </article>
        `;

        contentContainer.appendChild(section);
    });

    const todaySection=document.createElement('section')
    todaySection.className = 'today-main-section';
    todaySection.innerHTML = `
    <article class="today-book">
        <a href="../detail/미드나잇라이브러리.html">
            <img src="https://qi-b.qoo10cdn.com/partner/goods_image/9/9/3/7/349129937g.jpg" width="150" height="300">
        </a>
        <div class="today-book-details">
            <div class="article-header">
                <h1 class="article-title">오늘의 책</h1>
            </div>
            <div class="article-body">
                <h3>${books[1].title}</h3>
                <p>생을 끝내는 것이 유일한 희망이었던 주인공, 다른 삶을 선택했다면 어떤 결과가 나왓을까?
                    후회와 잘못된 선택을 반복하는 이 책은 선물과 같다.
                </p>
                <p>작가: ${books[1].author}</p>
                <p>평점: ${books[1].rating}</p>
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

window.onload = updateContent;