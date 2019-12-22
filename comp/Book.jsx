export default class Book extends React.Component {
  render() {
    const { selected, idx } = this.props;
    const { title,thumbnail } = this.props.book;
    const { amount, currencyCode } = this.props.book.listPrice;
    let moneySign = "";

    switch (currencyCode) {
      case "ILS":
        moneySign = "₪";
        break;
      case "EUR":
        moneySign = "€";
        break;
      case "USD":
        moneySign = "$";
        break;
    }

    return (
      <div onClick={() => selected(idx)} className="bookContainer">
        <div>{title}</div>
        <img src={thumbnail}/>
        <div>
          {amount}
          {moneySign}
        </div>
      </div>
    );
  }
}
