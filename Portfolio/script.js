// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 
        ? "#0f172a" 
        : "rgba(15,23,42,0.9)";
});