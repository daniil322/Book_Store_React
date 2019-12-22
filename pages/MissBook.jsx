import { getBooks } from "../service/books.js";
import BookList from "../comp/BookList.jsx";
import BookDetails from '../comp/BookDetails.jsx'

export default class Books extends React.Component {
  state = { selected: false, books: [] };

  changeSelected = idx => {
    this.setState({ selected:this.state.books[idx]});
  };

  componentDidMount() {
    this.addBooks();
  }

  addBooks = () => {
    this.setState({ books: getBooks() });
  };

  render() {
    const { selected, books } = this.state;
    const page = selected ? <BookDetails book={selected} /> : <BookList selected={this.changeSelected} books={books} />;

    return page;
  }
}
