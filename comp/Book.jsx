import utils from "../service/utils.js";

const { Link } = ReactRouterDOM;
export default class Book extends React.Component {
  render() {
    const {
      book: {
        id,
        title,
        thumbnail,
        listPrice: { amount, currencyCode }
      }
    } = this.props;
    let moneySign = utils.checkCurrency(currencyCode);
    return (
      <Link to={`/books/${id}`} className="bookContainer pointer">
        <div>{title}</div>
        <img className="listImg" src={thumbnail} />
        <div>
          {amount}
          {moneySign}
        </div>
      </Link>
    );
  }
}
