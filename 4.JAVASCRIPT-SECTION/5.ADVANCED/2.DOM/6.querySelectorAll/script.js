//  select all product cards

const productCardEl = document.querySelectorAll('.product-card');
console.log(productCardEl);

const productNameEl = document.querySelectorAll('.product-name'); 

productNameEl.forEach((el) => console.log(el.innerHTML)
) 
 
const laptopPriceEl = document.querySelectorAll('[data-category = "laptop"] .product-price')

laptopPriceEl.forEach((el) => console.log(el.innerHTML)
) 
 
const productCardArr = Array.from(productCardEl) 
