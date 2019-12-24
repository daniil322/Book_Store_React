// AIzaSyBclxbNmV6i73zM98CxiuwHTy_XVs4w7hg
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export default { getBooksFromApi };
function getBooksFromApi(searchWord) {
  const prm = axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchWord}`
  );
  return prm.then(books => {
    return Promise.resolve(books.data.items);
  });
}
