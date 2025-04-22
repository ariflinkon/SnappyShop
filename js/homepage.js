document.addEventListener("DOMContentLoaded", function () {
    console.log("SwiftShopper is ready!");
  
    const startShoppingBtn = document.querySelector('a[href="#shop"]');
    const shopSection = document.getElementById("shop");
  
    startShoppingBtn.addEventListener("click", function (e) {
      e.preventDefault();
      shopSection.scrollIntoView({ behavior: "smooth" });
    });
  
    // Buy Now alert
    document.querySelectorAll(".btn-primary").forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const productName = this.closest(".card").querySelector(".card-title").textContent;
        alert(`Thank you for your interest in ${productName}!`);
      });
    });
  
    // Active navbar link
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
    // Truncate descriptions
    document.querySelectorAll(".card-text").forEach(desc => {
      const fullText = desc.textContent.trim();
      const words = fullText.split(" ");
      const wordLimit = 20;
  
      if (words.length > wordLimit) {
        const shortText = words.slice(0, wordLimit).join(" ") + "...";
        const readMoreLink = document.createElement("a");
        readMoreLink.href = "#";
        readMoreLink.textContent = " Read more";
        readMoreLink.classList.add("text-primary", "ml-1");
  
        desc.textContent = shortText;
        desc.appendChild(readMoreLink);
  
        readMoreLink.addEventListener("click", function (e) {
          e.preventDefault();
          desc.textContent = fullText;
        });
      }
    });
  
    // Cart functionality
    const cartItems = [];
    const cartList = document.getElementById("cart-items");
    const cartSection = document.getElementById("cart");
  
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function () {
        const productCard = this.closest(".card");
        const productName = productCard.querySelector(".card-title").textContent;
  
        cartItems.push(productName);
        updateCartDisplay();
        alert(`${productName} added to cart!`);
      });
    });
  
    function updateCartDisplay() {
      cartList.innerHTML = "";
      if (cartItems.length === 0) {
        cartList.innerHTML = '<li class="list-group-item text-center">Your cart is empty.</li>';
      } else {
        cartItems.forEach((item, index) => {
          const li = document.createElement("li");
          li.className = "list-group-item d-flex justify-content-between align-items-center";
          li.textContent = item;
  
          const removeBtn = document.createElement("button");
          removeBtn.className = "btn btn-sm btn-outline-danger";
          removeBtn.innerHTML = "&times;";
          removeBtn.addEventListener("click", () => {
            cartItems.splice(index, 1);
            updateCartDisplay();
          });
  
          li.appendChild(removeBtn);
          cartList.appendChild(li);
        });
      }
    }
  
    // View cart
    document.getElementById("view-cart").addEventListener("click", function (e) {
      e.preventDefault();
      cartSection.classList.remove("d-none");
      cartSection.scrollIntoView({ behavior: "smooth" });
      updateCartDisplay();
    });
  
    // Clear cart
    document.getElementById("clear-cart").addEventListener("click", function () {
      cartItems.length = 0;
      updateCartDisplay();
    });
  });
  