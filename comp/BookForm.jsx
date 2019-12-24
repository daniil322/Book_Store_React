export default class BookForm extends React.Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.rate = React.createRef();
    this.text = React.createRef();
    this.date = React.createRef();
  }
  handleSubmit = event => {
    event.preventDefault();
    const userName = this.name.current.value;
    const rate = this.rate.current.value;
    const text = this.text.current.value;
    const date = this.date.current.value;
    if (!userName || !rate || !text) return;
    this.props.onAddReview(userName, rate, text, date);
    this.name.current.value = "";
    this.rate.current.value = "";
    this.text.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="flex">
          <input
            type="text"
            name="reviewerName"
            ref={this.name}
            placeholder="Your name"
          />
          <input
            className="width100"
            type="number"
            name="rating"
            ref={this.rate}
            min="1"
            max="5"
            placeholder="Rate the book"
          />
        </div>
        <input  type="date" name="date" ref={this.date} id="" />
        <textarea
          name="reviewText"
          ref={this.text}
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
