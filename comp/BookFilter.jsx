import { getBooks } from "../service/books";

export default class Filter extends React.Component {
  state = { title: "", price: "" };

  changeValue = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      this.changeBooks
    );
  };

  changeBooks = () => {
    this.props.filter(this.state);
  };

  render() {
    const { title, price } = this.state;
    return (
      <div>
        <h3>Search</h3>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Search By Name"
          onChange={this.changeValue}
        />
        <input
          type="number"
          name="price"
          placeholder="Highest Price"
          value={price}
          onChange={this.changeValue}
        />
      </div>
    );
  }
}
