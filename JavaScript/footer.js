// Function to load the footer
function loadFooter() {
    const footerHTML = `
        <footer class="site-footer">
            <p>&copy; 2024 Ian Marchbank. All Rights Reserved.</p>
        </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}

// Load the header and footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loadFooter();
});