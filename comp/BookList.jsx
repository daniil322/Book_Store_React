import Book from "./Book.jsx";
export default class BookList extends React.Component {
  render() {
    const { books, selected, checkCurrency } = this.props;
    return (
      <div className="flex flexWrap">
        {books.map((book, idx) => {
          return (
            <Book
              checkCurrency={checkCurrency}
              selected={selected}
              idx={idx}
              key={book.id}
              book={book}
            />
          );
        })}
      </div>
    );
  }
}
