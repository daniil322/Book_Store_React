export default class BookDetails extends React.Component {
  state = { isDesc: false };
  getPageCountText(pageCount) {
    if (pageCount > 500) {
      return "Long Reading";
    } else if (pageCount > 200) {
      return "Decent Reading";
    } else {
      return "Light Reading";
    }
  }

  getPriceClass(amount) {
    if (amount > 150) {
      return "moreThen150";
    } else if (amount < 20) {
      return "lessThen20";
    }
  }
  getDescription(description) {
    const cutDesc = description.split(" ");
    if (!this.state.isDesc) {
      return cutDesc.length >= 10 ? (
        <p>
          {" "}
          {cutDesc.slice(0, 10).join(" ")}
          <a className="show" onClick={this.toggleDescription}>
            {" "}
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
            {" "}
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
    const {
      returnToList,
      checkCurrency,
      book: {
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
    } = this.props;
    let pageCountText = this.getPageCountText(pageCount),
      priceTxt = this.getPriceClass(amount),
      moneySign = checkCurrency(currencyCode),
      desc = this.getDescription(description);

    const dateText = publishedDate >= 10 ? "Vetern book" : "New!!";

    const sale = isOnSale ? (
      <img className="saleImg" src="../img/sale.jpeg" />
    ) : null;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{authors}</h3>
        <img src={thumbnail} />
        <h3>Subtitle: {subtitle}</h3>
        <h3>
          categories:{" "}
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
        <h3>language: {language}</h3>
        <div>{desc}</div>
        <div className="flex">
          <h3 className={priceTxt}>
            Book price : {amount} {moneySign}
          </h3>
          {sale}
        </div>
        <button className="backBtn" onClick={returnToList}>
          Back
        </button>
      </div>
    );
  }
}
