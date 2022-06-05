const BASE_URL = 'http://localhost:3000';

function removeBook(id) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(response =>
    response.json()
  );
}

removeBook(1);
removeBook(2);
removeBook(3);

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

// function removeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`;
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(url, options).then(res => res.json());
// }

// removeBook(15);
// removeBook(14);
