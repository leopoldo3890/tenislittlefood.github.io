// script.js

// Inicializa el contador de productos en el carrito
let cartCount = 0;

// Agrega un evento clic a todos los botones "Agregar al carrito"
document.querySelectorAll(".add-to-cart-button").forEach(button => {
    button.addEventListener("click", () => {
        // Incrementa el contador de productos en el carrito
        cartCount++;
        
        // Actualiza el contador de productos en el header
        document.getElementById("cart-count").textContent = cartCount;
    });
});
