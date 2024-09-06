let blogPosts = []; // Declare blogPosts globally to store fetched data

document.addEventListener("DOMContentLoaded", function() {
    const mainContainer = document.querySelector("main.container");

    // Fetch the blog posts JSON
    fetch('data/posts.json')
        .then(response => response.json())  // Parse the JSON response
        .then(files => {
            return Promise.all(files.map(file => fetchPost(file)));
        })
        .then(posts => {
            blogPosts = posts; // Store the fetched blog posts in the global variable
            renderPosts(blogPosts, mainContainer); // Render all posts initially
        })
        .catch(error => console.error('Error loading blog posts:', error));

    // Now that the DOM is fully loaded, initialize the search functionality
    initSearch();
});

// Function to fetch and parse an individual HTML post file
function fetchPost(file) {
    return fetch(`data/posts/${file}`)
        .then(response => response.text())
        .then(htmlText => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            
            // Extract metadata from the HTML file (assuming metadata is inside specific tags)
            const title = doc.querySelector('title').innerText;
            const date = doc.querySelector('meta[name="date"]').getAttribute('content');
            const description = doc.querySelector('meta[name="description"]').getAttribute('content');
            const tags = doc.querySelector('meta[name="tags"]').getAttribute('content').split(',');
            const image = doc.querySelector('meta[name="image"]').getAttribute('content');

            return { 
                id: file.replace('.html', ''), // Use the file name as ID
                title,
                date,
                description,
                tags,
                image
            };
        })
        .catch(error => console.error('Error fetching post:', error));
}

// Function to render posts to the page
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
            <a href="data/posts/${post.id}.html" class="read-more">Read more</a>
        `;
        container.appendChild(postElement);
    });
}