const hamburgerButton = document.getElementById('hamburger-button');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
    // Toggle 'active' class on the nav menu
    navMenu.classList.toggle('active');

    // Toggle 'active' class on the hamburger button for 'X' animation
    hamburgerButton.classList.toggle('active');

    // ARIA attributes for accessibility
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
});

// Optional: Close menu when a link is clicked (useful for single-page apps or #links)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburgerButton.classList.remove('active');
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
    });
});