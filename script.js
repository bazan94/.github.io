// This is a simple script to showcase how you can use JavaScript
// for interactive functionality on your portfolio.

document.addEventListener("DOMContentLoaded", () => {
    // Example: Display an alert on the "About Me" section click
    const aboutSection = document.getElementById("about-text");

    aboutSection.addEventListener("click", () => {
        alert("Hello! Thanks for reading about me.");
    });
});
