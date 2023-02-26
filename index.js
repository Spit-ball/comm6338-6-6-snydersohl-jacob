const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function toggleHamburgerMenu() {
    hamburgerBtn.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', hamburgerMenu.classList.contains('show-menu'));
}

function closeHamburgerMenu() {
    hamburgerBtn.classList.remove('is-active');
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', false);
    hamburgerBtn.focus();
}

hamburgerBtn.addEventListener('click', toggleHamburgerMenu);

document.addEventListener('click', function (event) {
    if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        closeHamburgerMenu();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        closeHamburgerMenu();
    }
});

window.addEventListener('resize', function (event) {
    if (window.innerWidth >= 800 && hamburgerMenu.classList.contains('show-menu')) {
        closeHamburgerMenu();
    }
});
