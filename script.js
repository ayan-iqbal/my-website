// ===============================
// ACTIVE NAV LINK
// ===============================
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ===============================
document.addEventListener("DOMContentLoaded", () => {

  const shopNowBtn = document.getElementById("shopNowBtn");
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
      window.location.href = "product.html";
    });
  }

    // ===============================
  // LOGIN / SIGNUP MODALS
  // ===============================
  const loginBtn = document.querySelector(".login-btn");
  const signupBtn = document.querySelector(".signup-btn");

  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");

  const closeLogin = document.getElementById("closeLogin");
  const closeSignup = document.getElementById("closeSignup");
  const openSignup = document.getElementById("openSignup");

  if (loginBtn && signupBtn) {
    loginBtn.addEventListener("click", () => loginModal.style.display = "flex");
    signupBtn.addEventListener("click", () => signupModal.style.display = "flex");
  }

  if (closeLogin) closeLogin.addEventListener("click", () => loginModal.style.display = "none");
  if (closeSignup) closeSignup.addEventListener("click", () => signupModal.style.display = "none");

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === signupModal) signupModal.style.display = "none";
  });

  if (openSignup) {
    openSignup.addEventListener("click", () => {
      loginModal.style.display = "none";
      signupModal.style.display = "flex";
    });
  }

  // ===============================
  // LOGIN / SIGNUP LOGIC
  // ===============================
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = {
        name: signupForm.querySelector("#signupName").value.trim(),
        email: signupForm.querySelector("#signupEmail").value.trim(),
        password: signupForm.querySelector("#signupPassword").value.trim()
      };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("loggedIn", "true");

      alert("Account created successfully!");
      signupForm.reset();
      signupModal.style.display = "none";
      loginModal.style.display = "flex";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const savedUser = JSON.parse(localStorage.getItem("user"));

 if (!savedUser) {
        alert("No account found");
        return;
      }

      const email = loginForm.querySelector("#loginEmail").value;
      const password = loginForm.querySelector("#loginPassword").value;

      if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        loginModal.style.display = "none";
      } else {
        alert("Invalid email or password");
      }
    });
  }

});

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

  // ===== UPDATE COUNT =====
  function updateCartCount() {
    let total = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.innerText = total;
  }

});

  // ===============================
  // SHOP NOW BUTTON
  // ===============================
  const shopNowBtn = document.getElementById("shopNowBtn");
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
      window.location.href = "product.html";
    });
  }


  // ===============================
  // WHY CARDS
  // ===============================
  document.querySelectorAll(".why-card").forEach(card => {
    card.addEventListener("click", () => {
      alert(card.querySelector("h3").innerText + " selected!");
    });
  });

  // ===============================
  // TESTIMONIAL SLIDER
  // ===============================
  const reviews = document.querySelectorAll(".testimonial-card");
  let currentReview = 0;

  if (reviews.length > 0) {
    setInterval(() => {
      reviews.forEach((r, i) => r.classList.toggle("active", i === currentReview));
      currentReview = (currentReview + 1) % reviews.length;
    }, 4000);
  }

  // ===============================
  // NEWSLETTER
  // ===============================
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for subscribing!");
      newsletterForm.reset();
    });
  }
  
document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // CONTACT FORM
  // ===============================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }

  // ===============================
  // FOOTER YEAR
  // ===============================
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  });

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
// 
