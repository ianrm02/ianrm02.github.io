// Function to load the header
function loadHeader() {
    const headerHTML = `
        <header class="site-header">
        <div class="container">

            <h1>Marchbank.dev Blog</h1>

            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

        </div>
    </header>
    `;
    document.getElementById('header').innerHTML = headerHTML;
}

// Load the header and footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
});