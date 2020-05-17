// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let $price = parseFloat(product.querySelector('.price span').innerHTML);
  let $quantity = parseInt(product.querySelector('.quantity input').value);

  //Use the values you extracted to calculate the subtotal price.
  let $subtotal = $price * $quantity;

  product.querySelector('.subtotal span').innerHTML = $subtotal;
  /*using a dot (.) because I'm accessing a class then span because I need to access the span whithin the element*/
  return $subtotal;
}

// ITERATION 2
function calculateAll() {
  const allProducts = document.querySelectorAll('.product'); //using querySelectorAll because we're targeting all elements that may share the the css selector "product". This is useful when you have + than 1 product
  let total = 0;

  //spreading and mapping to get the elements in each row and update the subtotal in order to get the total
  [...allProducts].map((product) => (total = total + updateSubtotal(product)));
  document.querySelector('#total-value span').innerHTML = total;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
