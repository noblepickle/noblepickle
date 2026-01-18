// navbar
const navToggle = document.querySelector('.nav-open');
const nav = document.querySelector('nav');

const toggleNav = () => {
    
    if (!nav.classList.contains('open')) {
        nav.classList.add('open');
    } else {
        nav.classList.remove('open')
    }
};

navToggle.addEventListener('click', toggleNav);
