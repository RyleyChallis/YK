const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

const closeMenu = () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    document.querySelector('.overlay').classList.remove('active'); // Add this line
    document.body.style.overflow = 'initial';
};

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active'); // Add this line
    
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'initial';
});

document.querySelector('.overlay').addEventListener('click', closeMenu);

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) {
                return;
            }

            if (window.location.protocol !== 'file:' && href.endsWith('.html')) {
                e.preventDefault();
                fetch(href, { method: 'HEAD' })
                    .then(response => {
                        window.location.href = response.ok ? href : '404.html';
                    })
                    .catch(() => {
                        window.location.href = '404.html';
                    });
            }
        });
    });
});

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.35
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

document.addEventListener("DOMContentLoaded", reveal);

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    
    if (window.scrollY > 150) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});