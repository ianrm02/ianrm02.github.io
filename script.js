// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.getElementById('search');
//     const container = document.querySelector('main.container');

//     // Function to render blog posts
//     function renderPosts(posts) {
//         container.innerHTML = '';  // Clear existing posts before rendering
//         posts.forEach(post => {
//             container.innerHTML += `
//                 <article class="blog-post" id="${post.id}">
//                     <img src="${post.image}" alt="Featured Image">
//                     <h2>${post.title}</h2>
//                     <p class="post-meta">Posted on <time datetime="${post.date}">${new Date(post.date).toDateString()}</time> | Tags: <span class="tags">${post.tags}</span></p>
//                     <p>${post.excerpt}</p>
//                     <a href="#${post.id}" class="read-more">Read more</a>
//                 </article>
//             `;
//         });

//         // After rendering, attach search functionality
//         const blogPosts = document.querySelectorAll('.blog-post');

//         searchInput.addEventListener('keyup', function(e) {
//             const searchTerm = e.target.value.toLowerCase();

//             blogPosts.forEach(post => {
//                 const title = post.querySelector('h2').textContent.toLowerCase();
//                 const tags = post.querySelector('.tags').textContent.toLowerCase();
//                 const content = post.querySelector('p').textContent.toLowerCase();

//                 if (title.includes(searchTerm) || tags.includes(searchTerm) || content.includes(searchTerm)) {
//                     post.style.display = 'block';
//                 } else {
//                     post.style.display = 'none';
//                 }
//             });
//         });
//     }

//     // Fetch blog posts from JSON file
//     fetch('posts.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(posts => {
//             renderPosts(posts);
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// });