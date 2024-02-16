const url = 'https://api.thecatapi.com/v1/images/search'

// Function to get image from api
async function fetchCats() {
    try {
        let response = await fetch(url);
        let display = await response.json();
        displayCat(display[0].url);
    } catch (error) {
        console.error(`There was an error!`, error);
    }
}

// This function will display the image by creating a img element with set styling and appending the img to the created element
function displayCat(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'A photo of a random cat';
    img.width = 250;
    img.style.position = 'absolute'; // Set the position to absolute
    img.style.top = '250px'; // Set the top offset
    img.style.left = '800px'; // Set the left offset
    let catDiv = document.querySelector('#cats');
    if (catDiv) {
        catDiv.innerHTML = '';
        catDiv.appendChild(img);
    }
}