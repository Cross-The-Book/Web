import { allBookData } from "./books.js";

document.addEventListener('DOMContentLoaded', function () {
    updateContent(allBookData);
});

function updateContent(allBookData) {
    const contentContainer = document.querySelector('.book-container');
    contentContainer.innerHTML = '';
    if (!Array.isArray(allBookData)) {
        console.log('boodata is not array!!');
        return;
    }
    console.log(allBookData);
    allBookData.forEach(bookData => {
        console.log(JSON.stringify(bookData));
        const div = document.createElement('figure');
        div.className = 'book';
        div.innerHTML = `
            <a href="../html/detail.html?book=${encodeURIComponent(JSON.stringify(bookData))}">
                <img src="${bookData.img}" width="250" height="400">
            </a>
            <figcaption>
                <p class="book_title">${bookData.title}</p>
                <p>${bookData.author}</p>
                <p>${bookData.rating}</p></figcation>
        `;
        contentContainer.appendChild(div);
    });
}