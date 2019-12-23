import { getBooks } from "../service/books.js";
import BookList from "../comp/BookList.jsx";
import Filter from "../comp/BookFilter.jsx";
export default class Books extends React.Component {
  state = { books: [] };


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
        <Filter filter={this.filterBooks} />
        <BookList books={books} />
      </div>
    );
  }
}
