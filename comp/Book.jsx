export default class Book extends React.Component {
  render() {
    const {
      checkCurrency,
      selected,
      idx,
      book: {
        title,
        thumbnail,
        listPrice: { amount, currencyCode }
      }
    } = this.props;
    let moneySign = checkCurrency(currencyCode);

    return (
      <div onClick={() => selected(idx)} className="bookContainer pointer">
        <div>{title}</div>
        <img className="listImg" src={thumbnail} />
        <div>
          {amount}
          {moneySign}
        </div>
      </div>
    );
  }
}
