const cart = fetchCartFromStorage();

const cartItems = document.querySelector(".checkout-items");
const { items } = cart;

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
        <span class="cart-item-color">Color: ${color}</span>
        <input class="cart-quantity-input" type="number" value="${quantity}">
        </div>
        <span class="cart-price cart-column">${price} RSD</span>
        <div class="cart-quantity cart-column">
            <div class="btn btn-danger" type="button">x</div>
        </div>`;

  cartRow.innerHTML = cartRowContents;

  cartItems.append(cartRow);

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

let shippingCosts = calculateTotal(cart) < 6000 ? 250 : 0;

const shippingCostEl = document.createElement("div");

shippingCostEl.innerHTML = `
    <div class="shipping-cost">
    <strong class="shipping-cost-title">Dostava:</strong>
    <span class="shipping-price"> ${shippingCosts} RSD</span>
  </div>
  `;

cartItems.append(shippingCostEl);

const subTotal = document.createElement("div");

subTotal.innerHTML = `
      <div class="cart-total">
      <strong class="cart-total-title">Ukupno:</strong>
      <span class="cart-total-price"> ${calculateTotal(cart) +
        shippingCosts} RSD</span>
    </div>
    `;

cartItems.append(subTotal);

if (cart.items.length === 0) {
  document.querySelector(".shipping-price").innerText = ` - RSD`;
}
if (cart.items.length === 0) {
  document.querySelector(".cart-total-price").innerText = `- RSD`;
}
