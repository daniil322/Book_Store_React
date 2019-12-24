import { getBooks, addBook } from "../service/books.js";
import BookList from "../comp/BookList.jsx";
import Filter from "../comp/BookFilter.jsx";
import BookSearch from "../comp/BookSearch.jsx";
import eventBusService from "../service/eventBusService.js";
export default class Books extends React.Component {
  state = { books: [] };

  onAddBook = book => e => {
    if (!book.saleInfo.listPrice) {
      return eventBusService.emit("toggleModal", "failed");
    }
    addBook(book);
    this.getBooks();
    eventBusService.emit("toggleModal", "success");
  };

  componentDidMount() {
    this.getBooks();
  }
  filterBooks = filteredBooks => {
    this.getBooks(filteredBooks);
  };

  getBooks = filter => {
    getBooks(filter).then(books => {
      this.setState({ books: books });
    });
  };

  render() {
    const { books } = this.state;
    if (!books) return <h1>Loading</h1>;
    return (
      <div>
        <BookSearch onAddBook={this.onAddBook} />
        <Filter filter={this.filterBooks} />
        <BookList books={books} />
      </div>
    );
  }
}
