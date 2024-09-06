const fs = require('fs');
const path = require('path');

// Directory containing the post HTML files
const postsDir = path.join(__dirname, '../data/posts');
const postsJsonPath = path.join(__dirname, '../data/posts.json');

// Function to update posts.json based on files in posts directory
function updatePostsJson() {
    // Read the directory to get HTML file names
    fs.readdir(postsDir, (err, files) => {
        if (err) {
            return console.error('Error reading posts directory:', err);
        }

        // Filter to only include .html files and extract date from the filename (assuming format YYYY-MM-DD.html)
        const htmlFiles = files
            .filter(file => file.endsWith('.html'))
            .map(file => {
                const dateStr = file.replace('.html', '');  // Get the date string (YYYY-MM-DD)
                return { file, date: new Date(dateStr) };    // Return object with file name and parsed date
            })
            .sort((a, b) => b.date - a.date)  // Sort by date (newest first)
            .map(item => item.file);          // Return the sorted file names

        // Write the sorted JSON array of filenames to posts.json
        fs.writeFile(postsJsonPath, JSON.stringify(htmlFiles, null, 2), (err) => {
            if (err) {
                return console.error('Error writing posts.json:', err);
            }
            console.log('posts.json updated successfully with sorted posts.');
        });
    });
}

updatePostsJson();