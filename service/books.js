import { Books } from "../service/booksJson.js";
export { getBooks, getBooksById, addReview, removeReview };
let gBooks = Books;

function getBooksById(id) {
  let book = gBooks.find(book => book.id === id);
  return Promise.resolve(book);
}
function removeReview(time, id) {
  gBooks = gBooks.map(book => {
    if (book.id === id && book.review) {
      book.review = book.review.filter(review => {
        if (time !== review.time) return review;
      });
    }
    return book;
  });
  return Promise.resolve(gBooks);
}

function addReview(name, rate, text, id) {
  const review = { name, rate, text, time: new Date().toLocaleString() };
  gBooks = gBooks.map(book => {
    if (book.id === id) {
      if (book.review) {
        return (book = { ...book, review: [...book.review, review] });
      }
      return (book = {
        ...book,
        review: [review]
      });
    }
    return book;
  });
  return Promise.resolve(gBooks);
}

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
        book.listPrice.amount > +filter.lPrice &&
        book.listPrice.amount < +filter.hPrice
      );
    });
  }
  return Promise.resolve(gBooks);
}
