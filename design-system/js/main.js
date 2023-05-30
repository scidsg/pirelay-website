const headings = [
    'Help people stay safe online',
    'The Private Human Network',
    'Help the world access the uncensored internet'
    // Add more headings here if desired
];

function changeHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    const randomIndex = Math.floor(Math.random() * headings.length);
    headingElement.innerHTML = headings[randomIndex];
}

document.addEventListener('DOMContentLoaded', changeHeading);
