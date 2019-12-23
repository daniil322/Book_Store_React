import { getBooksById, addReview, removeReview } from "../service/books.js";
import utils from "../service/utils.js";
import BookForm from "../comp/BookForm.jsx";
import BookReview from "../comp/BookReview.jsx";
const { Link } = ReactRouterDOM;

export default class BookDetails extends React.Component {
  state = { isDesc: false, book: null };

  componentDidMount() {
    this.getPage();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getPage();
    }
  }
  onRemoveReview = time => e => {
    const { id } = this.state.book;
    removeReview(time, id).then(() => {
      this.getPage();
    });
  };

  onAddReview = (name, rating, text) => {
    const { id } = this.state.book;
    addReview(name, rating, text, id).then(() => {
      this.getPage();
    });
  };

  getPage = () => {
    let id = this.props.match.params.id;
    getBooksById(id).then(book => {
      this.setState({ book });
    });
  };

  getDescription(description) {
    const cutDesc = description.split(" ");
    if (!this.state.isDesc) {
      return cutDesc.length >= 10 ? (
        <p>
          {cutDesc.slice(0, 10).join(" ")}
          <a className="show" onClick={this.toggleDescription}>
            Show more
          </a>
        </p>
      ) : (
        <p>{description}</p>
      );
    } else {
      return (
        <p>
          {description}{" "}
          <a className="show" onClick={this.toggleDescription}>
            Show less
          </a>
        </p>
      );
    }
  }
  toggleDescription = () => {
    this.setState(prevstate => ({ isDesc: !prevstate.isDesc }));
  };

  render() {
    if (!this.state.book) {
      return <h1>Loading</h1>;
    }
    const {
      book: {
        review,
        title,
        subtitle,
        authors,
        publishedDate,
        description,
        pageCount,
        categories,
        thumbnail,
        language,
        listPrice: { amount, currencyCode, isOnSale }
      }
    } = this.state;
    console.log(review);
    let pageCountText = utils.getPageCountText(pageCount),
      priceTxt = utils.getPriceClass(amount),
      moneySign = utils.checkCurrency(currencyCode),
      desc = this.getDescription(description);

    const dateText = publishedDate >= 10 ? "Vetern book" : "New!!";
    const sale = isOnSale ? (
      <img className="saleImg" src="../img/sale.jpeg" />
    ) : null;
    return (
      <div>
        <div className="flex">
          <img src={thumbnail} />
          <div className="flex flexCloumn">
            <h1>Title: {title}</h1>
            <h3>Authors: {authors}</h3>
            <h3>Subtitle: {subtitle}</h3>
            <h3>
              Categories:{" "}
              {categories.map(categorie => {
                return categorie + " ";
              })}
            </h3>
            <h4>
              Page count: {pageCount} pages, {pageCountText}
            </h4>
            <h3>
              Publish date: {publishedDate} , {dateText}
            </h3>
            <h3>Language: {language}</h3>
            <div>Description: {desc}</div>
            <div className="flex">
              <h3 className={priceTxt}>
                Book price : {amount} {moneySign}
              </h3>
              {sale}
            </div>
            <Link to="../books" className="backBtn">
              Back
            </Link>
          </div>
        </div>
        <div className="flex">
          <div>
            <p>Add Review</p>
            <BookForm onAddReview={this.onAddReview} />
          </div>
          <p>Reviews: </p>
          <div className="flex flexWrap">
            {review ? (
              <BookReview
                onRemoveReview={this.onRemoveReview}
                reviews={review}
              />
            ) : (
              <p>No Reviews</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
