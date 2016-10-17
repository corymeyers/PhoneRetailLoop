var accountBalance = parseInt(1000);
var price = buyPhone();

function buyPhone() {
  phonePrice = 200
  phoneCase = 20
  salesTax = 1.07
  var purchasePrice = parseInt((phonePrice + phoneCase)*salesTax);
  return purchasePrice;
}

do {
  accountBalance -= parseInt(price);
  console.log("Your total comes to $" + price + ". Your remaining account balance is $" + accountBalance)
} while ((accountBalance - price)>0)
