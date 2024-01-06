// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more products as needed
  ];

  // Initialize cart
  let cart = [];

  // Function to add item to the cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }

  // Function to update the cart display
  function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.name} - $${item.price}`;
      cartContainer.appendChild(itemDiv);
    });
  }

  // Add event listeners or call addToCart function as needed
  addToCart(1); // Example: Adding a product to the cart