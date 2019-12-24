import { searchBooksFromApi } from "../service/books.js";

export default class BookSearch extends React.Component {
  state = { results: null };

  addBooksToSearch = ev => {
    searchBooksFromApi(ev.target.value).then(results => {
      this.setState({ results });
    });
  };

  render() {
    const { results } = this.state;
    const { onAddBook } = this.props;
    return (
      <div>
        <input onChange={this.addBooksToSearch} type="search" name="" />
        <ul>
          {results
            ? results.map((result) => {
                return (
                  <div key={result.id} className="flex">
                    <li>{result.volumeInfo.title}</li>
                    <button onClick={onAddBook(result)}>+</button>
                  </div>
                );
              })
            : ""}
        </ul>
      </div>
    );
  }
}
