// Selcting Elements
const header = document.getElementsByTagName('header')[0];
const upToTopButton = document.getElementsByClassName('up-to-top')[0];
const hamburger = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByTagName('ul')[0];
const navLinks = document.getElementsByClassName('nav-link');
const icon = document.getElementsByClassName('line')[0];

//scroll Event
document.addEventListener('scroll', () => {
    vScroll = window.scrollY;
    if (vScroll > 200) {
        if (!header.classList.contains('active-header')) {
            header.classList.add('active-header');
        };
        if (!upToTopButton.classList.contains('show')) {
            upToTopButton.classList.add('show');
        };
    } else {
        if (header.classList.contains('active-header')) {
            header.classList.remove('active-header');
        };
        if (upToTopButton.classList.contains('show')) {
            upToTopButton.classList.remove('show');
        };
    }
});
//scroll to Top 
upToTopButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
hamburger.addEventListener('click', () => {
    icon.classList.toggle('active-icon');
    nav.classList.toggle('active-nav');
});

//hide menu after click
for(i = 0; i <= 4; i++) {
    navLinks[i].addEventListener('click', () => {
        icon.classList.toggle('active-icon');
        nav.classList.toggle('active-nav');
    });
};
