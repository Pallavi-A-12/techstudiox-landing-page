// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    if (navLinks.classList.container("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// closing Mibile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();