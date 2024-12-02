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

