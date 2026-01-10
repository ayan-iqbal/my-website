console.log("Cart.js loaded successfully!");  // ✅ Check if file loads
document.addEventListener("DOMContentLoaded", () => {

  const cartBtn = document.querySelector(".cart-btn");
  const cartCount = document.getElementById("cart-count");
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  const loginModal = document.getElementById("loginModal");

  // ===== INIT CART =====
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartCount) updateCartCount();

  // ===== ADD TO CART =====
  if (addToCartBtns.length > 0) {
    addToCartBtns.forEach(btn => {
      btn.addEventListener("click", () => {

        if (localStorage.getItem("loggedIn") !== "true") {
          alert("Please login to add items to cart");
          if (loginModal) loginModal.style.display = "flex";
          return;
        }

        const product = {
          id: btn.dataset.id || btn.innerText,  // fallback
          name: btn.dataset.name || btn.innerText,
          price: btn.dataset.price || "0",
          image: btn.dataset.image || "",
          quantity: 1
        };

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
          existing.quantity++;
        } else {
          cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        if (cartCount) updateCartCount();
        alert("Product added to cart ✔");
      });
    });
  }

  // ===== CART BUTTON CLICK =====
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "cart.html";
      } else {
        alert("Please login first");
        if (loginModal) loginModal.style.display = "flex";
      }
    });
  }

  // ===== UPDATE COUNT =====
  function updateCartCount() {
    let total = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.innerText = total;
  }

});
