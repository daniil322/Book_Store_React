import Book from "./Book.jsx";
export default class BookList extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div className="flex flexWrap">
        {books.map(book => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    );
  }
}
