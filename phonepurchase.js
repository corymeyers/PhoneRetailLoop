var PHONE_PRICE = parseInt(200);
var PHONE_CASE = parseInt(20);
var SALES_TAX = parseInt(1.09);
var SPENDING_THRESHOLD = parseInt(100);
var price = phonePrice(PHONE_PRICE, PHONE_CASE, SALES_TAX);
var accountBalance = buyPhone(price);
var newPrice = monetize(price);
// var newBalance = monetize2(accountBalance);

function phonePrice(PHONE_PRICE, PHONE_CASE, SALES_TAX) {
  var purchasePrice = (PHONE_PRICE + PHONE_CASE)*SALES_TAX;
  return purchasePrice;
}

function buyPhone() {
  var accountBalance = parseInt(1000);
  accountBalance -= parseInt(price);
  return accountBalance;
}

function monetize(price) {
  return "$" + price.toFixed(2);
}

// function monetize2(accountBalance) {
//   return "$" + accountBalance.toFixed(2);
// }
//no idea why this breaks my loop, probably a scope subtelty that I'm missing


do {
  accountBalance -= parseInt(price);
  console.log("Your total comes to " + newPrice + ". Your remaining account balance is $" + accountBalance)
} while ((accountBalance - price)>SPENDING_THRESHOLD)
