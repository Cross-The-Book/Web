import { allBookData } from "./books.js";

document.addEventListener('DOMContentLoaded', function () {
    updateContent(allBookData);
});

function updateContent(allBookData) {
    const contentContainer = document.querySelector('.book-container');
    contentContainer.innerHTML = '';
    if (!Array.isArray(allBookData)) {
        console.log('bookdata is not array!!');
        return;
    }
    allBookData.forEach(bookData => {
        const figure = document.createElement('figure');
        figure.className = 'book';
        figure.innerHTML = `
            <a href="../html/detail.html?book=${encodeURIComponent(JSON.stringify(bookData))}">
                <img src="${bookData.img}" width="250" height="400">
            </a>
            <figcaption>
                <p class="book_title">${bookData.title}</p>
                <p>${bookData.author}</p>
                <p>${bookData.rating}</p></figcaption>
        `;
        contentContainer.appendChild(figure);
    });
}