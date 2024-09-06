let blogPosts = []; // Declare blogPosts globally to store fetched data

// Fetch the blog posts JSON
document.addEventListener("DOMContentLoaded", function() {
    const mainContainer = document.querySelector("main.container");

    fetch('posts.json')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            blogPosts = data; // Store the fetched blog posts in the global variable
            renderPosts(blogPosts, mainContainer); // Render all posts initially
        })
        .catch(error => console.error('Error loading blog posts:', error));
});

// Render posts to the page
function renderPosts(posts, container) {
    container.innerHTML = ''; // Clear the container
    posts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-post");
        postElement.id = post.id;
        postElement.innerHTML = `
            <img src="${post.image}" alt="Image of ${post.title}">
            <h2>${post.title}</h2>
            <p class="post-meta">Posted on <time datetime="${post.date}">${new Date(post.date).toDateString()}</time> | Tags: <span class="tags">${post.tags.join(', ')}</span></p>
            <p>${post.description}</p>
            <a href="#${post.id}" class="read-more">Read more</a>
        `;
        container.appendChild(postElement);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.description.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    const mainContainer = document.querySelector("main.container");
    renderPosts(filteredPosts, mainContainer); // Re-render posts based on the search term
});