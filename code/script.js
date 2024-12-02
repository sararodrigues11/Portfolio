console.log("Hello, World!"); // This will show "Hello, World!" in the console

// Event Listener for Smooth Scrolling
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for side menu links
    const links = document.querySelectorAll('.side-menu a'); // Select all links in the side menu

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior

            const targetId = link.getAttribute('href').substring(1); // Extract the section ID from href
            const targetElement = document.getElementById(targetId); // Get the corresponding section element by ID

            // Scroll smoothly to the target section
            targetElement.scrollIntoView({
                behavior: 'smooth', // smooth scroll effect
                block: 'start' // Align section to the top of the viewport
            });
        });
    });

    // Event Listener for Hobby Section Input Toggle
    const hobbyTitles = document.querySelectorAll('.hobby h3'); // Select all hobby titles (e.g., Animais, Livros, etc.)
    console.log("Hobby titles found:", hobbyTitles); // Debugging: Check if hobby titles are selected correctly

    hobbyTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Debugging: Check which title was clicked
            console.log("Clicked on hobby:", title.textContent);

            const hobbyInput = title.nextElementSibling; // Select the next sibling (the .hobby-input div)
            console.log("Hobby input found:", hobbyInput); // Debugging: Check if the hobby input is found correctly

            // Toggle the visibility of the input field (textarea)
            hobbyInput.classList.toggle('show'); // Toggle the "show" class to control visibility
        });
    });
});
