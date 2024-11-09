/* ===================== MOBILE NAV =======================*/
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const fade = document.querySelector(".mobile-nav-fade");

const navLink = document.querySelectorAll(".nav-list__link");

mobileNavButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMobileNav();
});

fade.onclick = function () {
    toggleMobileNav();
};

function toggleMobileNav() {
    mobileNav.classList.toggle("mobile-nav--open");
    fade.classList.toggle("mobile-nav-fade--open");
    mobileNavIcon.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', function (event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
        }
    });
});