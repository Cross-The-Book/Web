const books = [
    { title: '모순', author: '양귀자', rating: 9.0, price: '11,700원', img: 'https://image.aladin.co.kr/product/2584/37/cover200/8998441012_3.jpg' },
    { title: '돈의 심리학', author: '모건 하우절/이지연 옮', rating: 8.6, price: '17,820원', img: 'https://image.aladin.co.kr/product/32852/7/cover200/k132936910_2.jpg' },
    { title: 'EBS 다큐프라임 자본주의', author: 'EBS 자본주의 제작팀', rating: 9.0, price: '15,300원', img: 'https://image.aladin.co.kr/product/3164/26/cover200/8957365796_1.jpg' },
    { title: '삼체 1~3 세트 – 전3권', author: '류츠신/이현아, 허유영 옮', rating: 9.4, price: '60,300원', img: 'https://image.aladin.co.kr/product/24394/37/cover200/8954442684_3.jpg' },
    { title: '돈의 속성', author: '김승호', rating: 8.7, price: '16,020원', img: 'https://image.aladin.co.kr/product/28884/59/cover200/s522832546_1.jpg' },
    { title: '물고기는 존재하지 않는다', author: '룰루 밀러/정지인 옮', rating: 8.4, price: '15,300원', img: 'https://image.aladin.co.kr/product/28465/73/cover200/k092835920_2.jpg' }
];

const rankingsData = {
    '2023.10.01 ~ 2024.04.30': {
        '국내도서': [0, 1, 2, 3, 4, 5],
        '국외도서': [5, 4, 3, 2, 1, 0],
    },
    '2023.11.01 ~ 2024.05.31': {
        '국내도서': [3, 2, 1, 0, 5, 4],
        '국외도서': [4, 5, 0, 1, 2, 3],
    },
    '2023.12.01 ~ 2024.06.30': {
        '국내도서': [5, 4, 3, 2, 1, 0],
        '국외도서': [0, 1, 2, 3, 4, 5],
    }
};

function updateContent() {
    const yearSelect = document.getElementById('year-select');
    const weekSelect = document.getElementById('week-select');
    const selectedYear = yearSelect.value;
    const selectedWeek = weekSelect.value;
    
    const rankings = rankingsData[selectedYear][selectedWeek];
    const contentContainer = document.getElementById('content');
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