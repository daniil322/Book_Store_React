export default { checkCurrency, getPriceClass, getPageCountText };

function checkCurrency(currencyCode) {
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
  return moneySign;
}

function getPriceClass(amount) {
  if (amount > 150) {
    return "moreThen150";
  } else if (amount < 20) {
    return "lessThen20";
  }
}

function getPageCountText(pageCount) {
  if (pageCount > 500) {
    return "Long Reading";
  } else if (pageCount > 200) {
    return "Decent Reading";
  } else {
    return "Light Reading";
  }
}
