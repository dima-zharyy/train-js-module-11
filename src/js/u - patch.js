const BASE_URL = 'http://localhost:3000';

const bookDataToChange = {
  author: 'Dima Zharyy',
};

function updateBookById(id, dataToChange) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToChange),
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(response => {
    if (!response.ok) {
      throw new Error('Not found!!!');
    }
    return response.json();
  });
}

updateBookById(1, bookDataToChange).then(console.log).catch(console.log);
updateBookById(2, bookDataToChange).then(console.log).catch(console.log);
updateBookById(3, bookDataToChange).then(console.log).catch(console.log);
updateBookById(4, bookDataToChange).then(console.log).catch(console.log);
updateBookById(10, bookDataToChange).catch(console.log);

//
///
//
//
///
//
///
//
//
/////
///
//
//
/////
///
//
//
/////
///
//
//
///

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
// }

// updateBookById({ title: 'Большая новая книга по NODEJS' }, 19);

// updateBookById({ rating: 1 }, 18);

// updateBookById({ rating: 4, author: 'Манго' }, 17);
