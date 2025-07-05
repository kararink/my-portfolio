// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    console.log('DOMContentLoaded fired.');
    console.log('menuToggle:', menuToggle);
    console.log('nav:', nav);

    if (menuToggle && nav) {
        console.log('menuToggle and nav found. Adding event listener.');
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        
    }
});