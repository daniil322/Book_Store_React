import { books } from "../service/booksJson.js";
import bookStorage from "./bookStorage.js";
import booksGoogleApi from "./booksGoogleApi.js";
export {
  getBooks,
  getBooksById,
  addReview,
  removeReview,
  searchBooksFromApi,
  addBookFromApi,
  addBook,
  movePage
};
let gBooks;
function getBooksById(id) {
  gBooks = bookStorage.load("gBooks");
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
  bookStorage.store("gBooks", gBooks);
  return Promise.resolve(gBooks);
}

function addReview(name, rate, text, date, id) {
  const review = { name, rate, text, date };
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
  bookStorage.store("gBooks", gBooks);
  return Promise.resolve(gBooks);
}

function getBooks(filter) {
  gBooks = bookStorage.load("gBooks") ? bookStorage.load("gBooks") : books;
  if (filter) {
    if (filter.price === "") {
      return Promise.resolve( gBooks.filter(book => {
        return book.title.includes(filter.title);
      }))
    }
    return Promise.resolve( gBooks.filter(book => {
      return  (
        book.title.includes(filter.title) &&
        book.listPrice.amount > +filter.lPrice &&
        book.listPrice.amount < +filter.hPrice
      );
    }))
  }
  return Promise.resolve(gBooks);
}

function addBookFromApi(searchWord, idx) {
  booksGoogleApi.getBooksFromApi(searchWord).then(results => {
    return addBook(results[idx]);
  });
}

function addBook(book) {
  const newBook = {
    id: book.id,
    title: book.volumeInfo.title,
    subtitle: (book.volumeInfo.subtitle = "No subtitle"),
    authors: book.volumeInfo.authors,
    publishedDate: book.volumeInfo.publishedDate,
    description: book.volumeInfo.description,
    pageCount: book.volumeInfo.pageCount,
    categories: book.volumeInfo.categories,
    thumbnail: book.volumeInfo.imageLinks.thumbnail,
    language: book.volumeInfo.language,
    listPrice: {
      amount: book.saleInfo.listPrice.amount,
      currencyCode: book.saleInfo.listPrice.currencyCode,
      isOnSale: false
    }
  };
  let isSame = false;
  gBooks.forEach(book => {
    if (book.id === newBook.id) isSame = true;
  });
  if (isSame) return;
  gBooks = [...gBooks, newBook];
  return bookStorage.store("gBooks", gBooks);
}

function movePage(id, operator) {
  let currIdx;
  gBooks.find((book, idx) => {
    if (id === book.id) return (currIdx = idx);
  });
  if (currIdx === gBooks.length - 1 && operator === 1) {
    return Promise.resolve(gBooks[0].id);
  }
  if (currIdx === 0 && operator === -1) {
    return Promise.resolve(gBooks[gBooks.length - 1].id);
  }
  return Promise.resolve(gBooks[currIdx + operator].id);
}

function searchBooksFromApi(searchWord) {
  return booksGoogleApi.getBooksFromApi(searchWord).then(results => {
    return results;
  });
}
