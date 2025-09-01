function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            
            if (body.getAttribute('data-theme') === 'light') {
                body.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '🌙';
            } else {
                body.setAttribute('data-theme', 'light');
                themeToggle.textContent = '☀️';
            }
        }
        
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
        
        document.body.setAttribute('data-theme', 'dark');