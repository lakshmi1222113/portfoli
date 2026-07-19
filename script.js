
console.log("Portfolio Loaded Successfully!");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
const navbar = document.querySelector(".navbar-collapse");

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar.classList.contains("show")) {

            new bootstrap.Collapse(navbar).toggle();

        }

    });

});
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});