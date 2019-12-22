import { gBooks } from "../service/booksJson.js";
export { getBooks };

function getBooks(filter) {
  if (filter) {
    if (filter.price === "") {
      return gBooks.filter(book => {
        return book.title.includes(filter.title);
      });
    }
    return gBooks.filter(book => {
      return (
        book.title.includes(filter.title) &&
        book.listPrice.amount < +filter.price
      );
    });
  }
  return gBooks;
}
