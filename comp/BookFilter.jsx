export default class Filter extends React.Component {
  state = { title: "", lPrice: "", hPrice: Infinity };

  changeValue = event => {
    let value = event.target.value;
    if (event.target.name === "hPrice" && !event.target.value) value = Infinity;
    this.setState(
      {
        [event.target.name]: value
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
        <h3>Filter Current Books</h3>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Search By Name"
          onChange={this.changeValue}
        />
        <input
          type="number"
          name="lPrice"
          placeholder="Lowest Price"
          value={price}
          onChange={this.changeValue}
        />
        <input
          type="number"
          name="hPrice"
          placeholder="Highest Price"
          value={price}
          onChange={this.changeValue}
        />
      </div>
    );
  }
}
