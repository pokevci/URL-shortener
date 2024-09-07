function shortenURL() {
    // Get the URL input
    const urlInput = document.getElementById('urlInput').value;
    
    // Simple URL shortening logic (not a real URL shortener)
    // In a real-world application, you'd send a request to a backend service
    if (urlInput === "") {
        alert("Please enter a URL.");
        return;
    }
    
    // Simple hash function for demonstration purposes
    const hash = btoa(urlInput).substring(0, 6); // Base64 encoding and truncating
    const shortURL = `https://short.url/${hash}`;
    
    // Display the shortened URL
    document.getElementById('result').innerHTML = `
        <p>Shortened URL:</p>
        <a href="${urlInput}" target="_blank">${shortURL}</a>
    `;
}
