// cart.js

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');
    const notification = document.getElementById('notification');
    
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add event listener to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.parentElement.querySelector('h3').textContent;
        const price = parseFloat(button.getAttribute('data-price'));
        const item = { name, price };
        cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        displayCartItems();
        displayNotification();
      });
    });
  

    function displayNotification() {
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 2000); 
    }
    
    
    function displayCartItems() {
      cartItemsContainer.innerHTML = ''; 
      let totalPrice = 0;
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <p>${item.name}</p>
          <p>$${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
      });
      totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
    }
    
    
    checkoutButton.addEventListener('click', () => {
      alert('Thank you for your purchase!');
      
      cartItems = [];
      localStorage.removeItem('cart');
      displayCartItems();
    });
  
   
    displayCartItems();
  });
  