var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName){
  var itemPrice = Math.floor(Math.random() * 101) + 1;
  var object = { [`${itemName}`]:itemPrice};
  cart.push(object);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {

  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
