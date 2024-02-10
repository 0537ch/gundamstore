// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        console.log('Added to cart: $' + price.toFixed(2));
        
      });
    });
  });
  