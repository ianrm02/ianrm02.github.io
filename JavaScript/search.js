// Search functionality
function initSearch() {
    const searchElement = document.getElementById('search');
    
    if (searchElement) {
        searchElement.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredPosts = blogPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.description.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
    
            const mainContainer = document.querySelector("main.container");
            renderPosts(filteredPosts, mainContainer); // Re-render posts based on the search term
        });
    } else {
        console.error("Search input element not found");
    }
}