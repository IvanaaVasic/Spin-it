if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

const STORAGE = sessionStorage;
const INITIAL_CART = { items: [], total: 0 };

function checkCart() {
  if (!STORAGE.getItem("cart"))
    STORAGE.setItem("cart", JSON.stringify(INITIAL_CART));
}

function putItemToCart(item) {
  checkCart();
  const cart = fetchCartFromStorage();

  let { items } = cart;

  items.push({ quantity: 1, ...item });
  total = calculateTotal({ items });

  putCartToStorage({ items, total });
}

function putCartTotalPrice(total) {
  checkCart();
  const cart = fetchCartFromStorage();

  cart.total = total;

  putCartToStorage({ total, ...cart });
}

function fetchCartFromStorage() {
  checkCart();
  return JSON.parse(STORAGE.getItem("cart"));
}

function putCartToStorage(cart) {
  STORAGE.setItem("cart", JSON.stringify(cart));
}

function removeItemFromCart(itemId) {
  const cart = fetchCartFromStorage();

  const items = cart.items.filter(i => i.id !== itemId);

  const total = calculateTotal(cart);

  putCartToStorage({ items, total });

  updateTotalPrice();
}

function changeQuantity(itemId, newQuantity) {
  const cart = fetchCartFromStorage();

  const items = cart.items.filter(i => i.id === itemId);
  items[0].quantity = newQuantity;

  const total = calculateTotal(cart);

  putCartToStorage({  ...cart });
}

function calculateTotal(cart) {
  return cart.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

function updateTotalPrice() {
  const cart = fetchCartFromStorage();
  const latestTotalPrice = calculateTotal(cart);
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerHTML = `${latestTotalPrice} RSD`;
}

function itemId(title, color, size) {
  return `${title}|${color}|${size}`;
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;

  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var color = shopItem.getElementsByClassName("shop-item-color")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  const size = document.querySelector(".size.selected").innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;

  addItemToCart(title, price, imageSrc, color, size);

  // updateCartTotal();
}

function showCart() {
  const cart = fetchCartFromStorage();
  const {  items } = cart;

  var cartItems = document.getElementsByClassName("cart-items")[0];
  cartItems.innerHTML = "";

  items.forEach(item => {
    const { title, color, price, imageSrc, quantity, size } = item;

    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" >
        </div>
        <div class="cart-title-color">
        <span class="cart-item-title">${title} ( ${size} )</span>
        <span class="cart-item-color">${color}</span>
        <input class="cart-quantity-input" type="number" value="${quantity}">
        </div>
        <span class="cart-price cart-column">${price} RSD</span>
        <div class="cart-quantity cart-column">
            <div class="btn btn-danger" type="button">x</div>
        </div>`;

    cartRow.innerHTML = cartRowContents;

    cartItems.append(cartRow);

    // document.getElementsByClassName("cart-total-price")[0].innerText =
    //   total + " RSD";

    // Remove item
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", () => {
        removeItemFromCart(itemId(title, color, size));
        cartRow.remove();
      });

    // Change quantity

    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", e => {
        changeQuantity(itemId(title, color, size), e.target.value);
        updateTotalPrice();
      });
  });

  const subTotal = document.createElement("div");

  subTotal.innerHTML = `
      <div class="cart-total">
      <strong class="cart-total-title">Subtotal:</strong>
      <span class="cart-total-price"> ${calculateTotal(cart)} RSD</span>
    </div>
    `;

  cartItems.append(subTotal);

  document.getElementById("myDropdownS").classList.toggle("show");
}

function addItemToCart(title, priceStr, imageSrc, color, size) {
  const cart = fetchCartFromStorage();

  // Uniquely identifies the item
  const id = itemId(title, color, size);

  if (cart.items.some(item => id === item.id)) {
    alert("This item is already added to the cart");
    return;
  }

  console.log(title, color, size);

  const price = Number(priceStr.replace(/[RSD,. ]/g, ""));
  const quantity = document.querySelector(".count-holder").innerText;

  putItemToCart({ id, title, price, imageSrc, color, size, quantity });
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  putCartTotalPrice(total);
}

document.getElementById("myDropdownS").addEventListener("click", e => {
  e.stopPropagation();
});

const sizes = document.querySelectorAll(".size");

sizes.forEach(s =>
  s.addEventListener("click", event => {
    sizes.forEach(s => s.classList.remove("selected"));
    event.target.classList.add("selected");
  })
);

window.onclick = function(event) {
  if (event.target.matches("dropdown-contentS")) return;

  if (!event.target.matches(".dropbtnS")) {
    var dropdowns = document.getElementsByClassName("dropdown-contentS")[0];
    if (dropdowns.classList.contains("show")) {
      dropdowns.classList.remove("show");
    }
  }
};
