function initialize() {
    const $hamburguerButton = document.getElementById("hamburguer-button");
    const $mobileMenu = document.getElementById("mobile-menu");

    function toggleMenu() {
        $mobileMenu.classList.toggle("hidden");
        $mobileMenu.classList.toggle("flex");
        $hamburguerButton.classList.toggle("toggle-btn");
    }

    $hamburguerButton.addEventListener("click", toggleMenu);
    $mobileMenu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initialize);