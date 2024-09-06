// let blogPosts = []; // Declare blogPosts globally to store fetched data

// document.addEventListener("DOMContentLoaded", function() {
//     const mainContainer = document.querySelector("main.container");

//     // Fetch the blog posts JSON
//     fetch('data/posts.json')
//         .then(response => response.json())  // Parse the JSON response
//         .then(data => {
//             blogPosts = data; // Store the fetched blog posts in the global variable
//             renderPosts(blogPosts, mainContainer); // Render all posts initially
//         })
//         .catch(error => console.error('Error loading blog posts:', error));

//     // Now that the DOM is fully loaded, initialize the search functionality
//     initSearch();
// });

// // Function to render posts to the page
// function renderPosts(posts, container) {
//     container.innerHTML = ''; // Clear the container
//     posts.forEach(post => {
//         const postElement = document.createElement("article");
//         postElement.classList.add("blog-post");
//         postElement.id = post.id;
//         postElement.innerHTML = `
//             <img src="${post.image}" alt="Image of ${post.title}">
//             <h2>${post.title}</h2>
//             <p class="post-meta">Posted on <time datetime="${post.date}">${new Date(post.date).toDateString()}</time> | Tags: <span class="tags">${post.tags.join(', ')}</span></p>
//             <p>${post.description}</p>
//             <a href="#${post.id}" class="read-more">Read more</a>
//         `;
//         container.appendChild(postElement);
//     });
// }

const postDirectory = 'data/posts/';

// Function to fetch and render posts
function renderPosts() {
  const postContainer = document.getElementById('post-container');
  
  // Fetch the list of post filenames from posts.json
  fetch('data/posts.json')
    .then(response => response.json())
    .then(posts => {
      // Iterate over each post file
      posts.forEach((postFile) => {
        fetch(`${postDirectory}${postFile}`)
          .then(response => response.text())
          .then(htmlContent => {
            // Create a container element for each post
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = htmlContent;

            // Append each post to the main container
            postContainer.appendChild(postElement);
          })
          .catch(error => {
            console.error('Error loading post:', postFile, error);
          });
      });
    })
    .catch(error => {
      console.error('Error fetching post list:', error);
    });
}

// Call the renderPosts function when the page loads
window.onload = renderPosts;