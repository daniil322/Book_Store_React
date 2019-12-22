export default class BookDetails extends React.Component {
  render() {
    const {
      title,
      subtitle,
      authors,
      publishedDate,
      description,
      pageCount,
      categories,
      thumbnail,
      language
    } = this.props.book;
    const {amount,currencyCode,isOnSale}=this.props.book.listPrice
    let pageCountText,priceTxt,moneySign
    if (pageCount>500){
        pageCountText='Long Reading'
    }else if (pageCount>200){
         pageCountText='Decent Reading'
    }else{
        pageCountText='Light Reading'
    }
  const dateText=  publishedDate>=10? 'Vetern book': 'New!!'
  if (amount>150){
priceTxt='moreThen150'
  }else if (amount<20){
      priceTxt='lessThen20'
  }
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

    return(
        <div>
  <h1>{title}</h1>
    <h3>{authors}</h3>
    <img src={thumbnail}/>
    <h3>Subtitle: {subtitle}</h3>
  <h4>Page count: {pageCount} pages, {pageCountText}</h4>
    <h3>Publish date: {publishedDate} , {dateText}</h3>
    
  <h3 className={priceTxt}>Book price : {amount} {moneySign}</h3>
  
        </div>



    )




  }
}
