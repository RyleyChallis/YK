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
    
    // Check if the page has been scrolled more than 50px
    if (window.scrollY > 250) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});