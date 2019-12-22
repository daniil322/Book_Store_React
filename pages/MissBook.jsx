import { getBooks } from "../service/books.js";
import BookList from "../comp/BookList.jsx";
import BookDetails from "../comp/BookDetails.jsx";
import Filter from "../comp/BookFilter.jsx";
export default class Books extends React.Component {
  state = { selected: false, books: [] };

  checkCurrency(currencyCode) {
    let moneySign = "";
    switch (currencyCode) {
      case "ILS":
        moneySign = "₪";
        break;
      case "EUR":
        moneySign = "€";
        break;
      case "USD":
        moneySign = "$";
        break;
    }
    return moneySign;
  }

  changeSelected = idx => {
    this.setState({ selected: this.state.books[idx] });
  };
  returnToList = () => {
    this.setState({ selected: false });
  };

  componentDidMount() {
    this.getBooks();
  }
  filterBooks = filteredBooks => {
    this.getBooks(filteredBooks);
  };

  getBooks = Filter => {
    this.setState({ books: getBooks(Filter) });
  };

  render() {
    const { selected, books } = this.state;
    const page = selected ? (
      <BookDetails
        returnToList={this.returnToList}
        checkCurrency={this.checkCurrency}
        book={selected}
      />
    ) : (
      <div>
        <Filter filter={this.filterBooks} />
        <BookList
          checkCurrency={this.checkCurrency}
          selected={this.changeSelected}
          books={books}
        />
      </div>
    );

    return page;
  }
}
