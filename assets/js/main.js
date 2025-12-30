/*==================== MENU SHOW ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU ON MOBILE LINK CLICK ====================*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if(navMenu) navMenu.classList.remove('show');
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              navLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

        if(navLink){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Uncomment if you want animations to replay on scroll
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*==================== CONTACT FORM ====================*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXK6bLNmnafuMVhRX7_EKy5CRL0TWzGAZvJvN1M0ol9wWKwlEy5Ife0jG3PXF-ATrP/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if(form){
    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully ✅";
                form.reset();
                setTimeout(() => { msg.innerHTML = ""; }, 5000);
            })
            .catch(error => {
                msg.innerHTML = "Something went wrong ❌";
                console.error('Error!', error.message);
            });
    });
}

/*==================== OPTIONAL: SMOOTH SCROLL ====================*/
/* Add this in CSS instead for better performance:
html {
    scroll-behavior: smooth;
}
*/

