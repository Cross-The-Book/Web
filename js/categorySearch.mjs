import { allBookData } from "./books.js";
import { updateContent } from "./categoryBooks.mjs";

document.addEventListener('DOMContentLoaded', function () {
    setupSearchForm();
});

function setupSearchForm() {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', searchBooks);
}

function searchBooks(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();

    let filteredBooks;
    if (searchTerm.trim() === '') {
        // 검색어가 비어있으면 모든 책 데이터를 표시
        filteredBooks = allBookData;
    } else {
        // 검색어가 있으면 해당 검색어를 포함하는 책 데이터를 표시
        filteredBooks = allBookData.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    }

    updateContent(filteredBooks);
}

/* function updateContent(allBookData) {
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
} */