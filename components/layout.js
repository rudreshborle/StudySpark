document.addEventListener("DOMContentLoaded", function () {
    const root = typeof rootPath !== 'undefined' ? rootPath : './';

    // Helper to fix paths
    const fixPaths = (container) => {
        if (root === './') return;

        container.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                link.setAttribute('href', root + href);
            }
        });

        container.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http')) {
                img.setAttribute('src', root + src);
            }
        });

        // specific fix for auth buttons if they use onclick (though I changed them to <a> tags in the header.html template)
        // keeping this just in case
    };

    // Load Header
    fetch(root + 'components/header.html')
        .then(response => response.text())
        .then(html => {
            const headerEl = document.getElementById('global-header');
            if (headerEl) {
                headerEl.innerHTML = html;
                fixPaths(headerEl);
                highlightActiveLink(headerEl);

                // Dark Mode Logic
                const toggleBtn = document.getElementById('theme-toggle');
                const body = document.body;

                // Init
                if (localStorage.getItem('theme') === 'light') {
                    body.classList.add('light-mode');
                    if (toggleBtn) toggleBtn.textContent = '☀️';
                }

                // Toggle
                if (toggleBtn) {
                    toggleBtn.addEventListener('click', () => {
                        body.classList.toggle('light-mode');
                        const isLight = body.classList.contains('light-mode');
                        localStorage.setItem('theme', isLight ? 'light' : 'dark');
                        toggleBtn.textContent = isLight ? '☀️' : '🌙';
                    });
                }
            }
        })
        .catch(err => console.error("Failed to load header:", err));

    // Load Footer
    fetch(root + 'components/footer.html')
        .then(response => response.text())
        .then(html => {
            const footerEl = document.getElementById('global-footer');
            if (footerEl) {
                footerEl.innerHTML = html;
                /* Footer doesn't usually have links needing deep fix, but good practice */
            }
        })
        .catch(err => console.error("Failed to load footer:", err));
});

function highlightActiveLink(headerEl) {
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'homepage.html';

    const links = headerEl.querySelectorAll('nav ul li a');
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Simple check: if href ends with the current filename
        if (linkHref && linkHref.endsWith(filename)) {
            link.style.color = 'var(--text-strong)';
            link.style.opacity = '1';
        }
    });
}
