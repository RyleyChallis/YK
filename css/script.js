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