function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    navLinks.classList.toggle("active");

    // Toggle icon between ☰ and ✖
    menuToggle.innerHTML = navLinks.classList.contains("active") ? "✖" : "&#9776;";
}

// Close menu when clicking a link
function closeMenu() {
    document.querySelector(".nav-links").classList.remove("active");
    document.querySelector(".menu-toggle").innerHTML = "&#9776;";
}
