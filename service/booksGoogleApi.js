export default { getBooksFromApi };
function getBooksFromApi(searchWord) {
  const prm = axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchWord}`
  );
  return prm.then(books => {
    return Promise.resolve(books.data.items);
  });
}
