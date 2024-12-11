document.addEventListener('DOMContentLoaded', () => {
    const cartToggle = document.getElementById('cart-toggle');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const buyNow = document.getElementById('buy-now');

   
    cartToggle.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

   
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    
    buyNow.addEventListener('click', () => {
        alert('Proceeding to Checkout!');
    });

    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});
