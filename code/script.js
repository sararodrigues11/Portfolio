console.log("Hello, World!");



document.addEventListener("DOMContentLoaded", function() {
    // Select all links inside the side menu
    const links = document.querySelectorAll('.side-menu a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior of the anchor link

            const targetId = link.getAttribute('href').substring(1); // Extract the ID from href (removing #)
            const targetElement = document.getElementById(targetId); // Get the corresponding section by ID

            // Scroll smoothly to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth', // smooth scroll
                block: 'start' // Align the section at the top of the screen
            });
        });
    });
});

// Get the menu toggle button and the side menu
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.querySelector('.side-menu');

// Add click event listener to toggle the visibility of the menu
menuToggle.addEventListener('click', () => {
    console.log('Hamburger clicked');
    // Toggle the 'active' class on the side-menu
    sideMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});