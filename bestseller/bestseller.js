const books = [
    { title: '나를 소모하지 않는 현명한 태도에 관하여', author: '마티아느 뇔케/이미옥 역', rating: 9.6, price: '16,020원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/7/1/5/356882715s.jpg' },
    { title: '변방에서 중심으로', author: '문재인, 최종건', rating: 6.2, price: '29,700원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/6/0/6/356910606s.jpg' },
    { title: '어떻게 살 것인가', author: '이광수', rating: 9.7, price: '15,300원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/6/4/4/7/356906447s.jpg' },
    { title: '오십, 나는 재미있게 살기로 했다', author: '이서원', rating: 10, price: '15,300원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/3/3/8/356908338s.jpg' },
    { title: '삶이 흔들릴 때 뇌과학을 읽습니다', author: '이케가야 유지', rating: 9.8, price: '16,200원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/5/4/1/356892541s.jpg' },
    { title: '마흔에 읽는 쇼펜하우어', author: '강용수', rating: 9.9, price: '15,300원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/4/5/1/356791451s.jpg' }
];

const rankingsData = {
    '2024': {
        '5월 1주': [0, 1, 2, 3, 4, 5],
        '5월 2주': [5, 4, 3, 2, 1, 0],
        '5월 3주': [2, 3, 4, 5, 0, 1],
        '5월 4주': [1, 0, 5, 4, 3, 2]
    },
    '2023': {
        '5월 1주': [3, 2, 1, 0, 5, 4],
        '5월 2주': [4, 5, 0, 1, 2, 3],
        '5월 3주': [1, 4, 3, 0, 5, 2],
        '5월 4주': [2, 3, 1, 4, 0, 5]
    },
    '2022': {
        '5월 1주': [5, 4, 3, 2, 1, 0],
        '5월 2주': [0, 1, 2, 3, 4, 5],
        '5월 3주': [3, 2, 1, 0, 5, 4],
        '5월 4주': [1, 0, 3, 4, 2, 5]
    }
};

function updateContent() {
    const yearSelect = document.getElementById('year-select');
    const weekSelect = document.getElementById('week-select');
    const selectedYear = yearSelect.value;
    const selectedWeek = weekSelect.value;
    
    const rankings = rankingsData[selectedYear][selectedWeek];
    const contentContainer = document.getElementById('book-container');
    contentContainer.innerHTML = ''; 

    rankings.forEach((rankIndex, index) => {
        const book = books[rankIndex];
        const section = document.createElement('section');
        section.className = 'main-section';

        section.innerHTML = `
            <article class="article">
                <div class="article-header">
                    <h1 class="article-title">${index + 1}. ${book.title}</h1>
                </div>
                <div class="article-body">
                    <img src="${book.img}" width="250" height="400" alt="${book.title}">
                    <br><br>
                    <p>작가: ${book.author}</p>
                    <p>평점: ${book.rating}</p>
                    <p>가격: ${book.price}</p>
                </div>
            </article>
        `;
        
        contentContainer.appendChild(section);
    });
}

window.onload = updateContent;