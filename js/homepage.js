document.addEventListener("DOMContentLoaded", function () {
    console.log("SwiftShopper is ready!");

    // Scroll to the product section smoothly when "Start Shopping" is clicked
    const startShoppingBtn = document.querySelector('a[href="#shop"]');
    const shopSection = document.getElementById("shop");

    startShoppingBtn.addEventListener("click", function (e) {
        e.preventDefault();
        shopSection.scrollIntoView({ behavior: "smooth" });
    });

    // Show alert when "Buy Now" buttons are clicked
    const buyButtons = document.querySelectorAll(".btn-primary");

    buyButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const productName = this.closest(".card").querySelector(".card-title").textContent;
            alert(`Thank you for your interest in ${productName}!`);
        });
    });

    // Navbar active link toggle
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
