export default class BookForm extends React.Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.rate = React.createRef();
    this.text = React.createRef();
  }
  handleSubmit = event => {
    event.preventDefault();
    const userName = this.name.current.value;
    const rate = this.rate.current.value;
    const text = this.text.current.value;
    if (!userName||!rate||!text)return 
    this.props.onAddReview(userName, rate, text);
    this.name.current.value = "";
    this.rate.current.value = "";
    this.text.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className='flex'>
        <input
          type="text"
          name="reviewerName"
          ref={this.name}
          placeholder="Your name"
        />
        <input
        className='width100'
          type="number"
          name="rating"
          ref={this.rate}
          min="1"
          max="5"
          placeholder="Rate the book"
        />
        </div>
        <textarea
          name="reviewText"
          ref={this.text}
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    );

    // o Their full name (default: 'Books Reader')
    // ▪ Use React Ref to make this input focused when form appears
    // o Rate: 1-5 - use a dropdown
    // o Read at - datepicker (default now). o Textarea for free text
  }
}
