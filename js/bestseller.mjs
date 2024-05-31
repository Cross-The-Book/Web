import { bestseller } from './books.js';

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

document.addEventListener('DOMContentLoaded',function(){
    const yearSelect = document.getElementById('year-select');
    const weekSelect = document.getElementById('week-select');
    yearSelect.addEventListener('change',function(){
        const selectedYear = yearSelect.value;
        const selectedWeek = weekSelect.value;
        updateContent(selectedYear, selectedWeek);
    })
    weekSelect.addEventListener('change',function(){
        const selectedYear = yearSelect.value;
        const selectedWeek = weekSelect.value;
        updateContent(selectedYear, selectedWeek);
    })
    updateContent(yearSelect.value,weekSelect.value);
});

function updateContent(selectedYear, selectedWeek) {
    const rankings = rankingsData[selectedYear][selectedWeek];
    const contentContainer = document.getElementById('book-container');
    contentContainer.innerHTML = ''; 

    rankings.forEach((rankIndex, index) => {
        const book = bestseller[rankIndex];
        console.log('index',rankIndex);
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