const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(response => response.json());
}

function fetchBook(id) {
  return fetch(`${BASE_URL}/books/${id}`).then(response => response.json());
}

fetchBooks();
fetchBook(3);
fetchBook(6);
//
///
//
//
//
//

//
///
//
//
//
//

//
///
//
//
//
//

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
// }

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);
