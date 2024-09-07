function shortenURL() {
    const urlInput = document.getElementById('urlInput').value;
    
    if (urlInput === "") {
        alert("Please enter a URL.");
        return;
    }
    
    const hash = btoa(urlInput).substring(0, 6); // Base64 encoding
    const shortURL = `https://short.url/${hash}`;
    
    document.getElementById('result').innerHTML = `
        <p>Shortened URL:</p>
        <a href="${urlInput}" target="_blank">${shortURL}</a>
    `;
}
