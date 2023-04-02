const quantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));
const addToCart = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");

quantityControl.forEach(elem => {
    elem.onclick = function() {
    if(elem.className.includes("product__quantity-control_dec")) {
      if(Number(elem.nextElementSibling.textContent) > 1) {
        elem.nextElementSibling.textContent = Number(elem.nextElementSibling.textContent) - 1;
      }
    } else elem.previousElementSibling.textContent = Number(elem.previousElementSibling.textContent) + 1;
  }
}) 

addToCart.forEach(elem => {
    elem.onclick = function() {
    let product = Array.from(document.querySelectorAll(".cart__product"));
    const countProduct = elem.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
    let totalFind = product.find(item => item.dataset.id === elem.closest(".product").dataset.id);

    if(totalFind === undefined) {
      cartProducts.insertAdjacentHTML('beforeEnd',`<div class="cart__product" data-id="${elem.closest(".product").dataset.id}">
                                                  <img class="cart__product-image" src="${elem.closest(".product").querySelector('img').getAttribute('src')}">
                                                  <div class="cart__product-count">${countProduct}</div>`)
    } else {
      totalFind.lastChild.textContent = Number(totalFind.lastChild.textContent) + Number(countProduct);
    }
  }
})