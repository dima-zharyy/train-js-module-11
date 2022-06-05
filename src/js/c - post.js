const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Test Book JavaScript',
  author: 'Dima Zharyy',
  genres: ['JS documentation', 'JS tasks', 'JS theory'],
  rating: 9.7,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(response => response.json());
}

addBook({
  title: 'Test Book HTML',
  author: 'Dima S. Zharyy',
  genres: ['HTML documentation'],
  rating: 9.7,
}).then(renderBook);

function renderBook(book) {
  console.log('Response from backend');
  console.log(book);
}
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }

// addBook({
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// }).then(renderBook);

// function renderBook(book) {
//   console.log('Пришел ответ от бекенда можно рисовать');
//   console.log(book);
// }
