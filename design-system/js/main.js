const headings = [
    'Own Your Work',
    'Take Control of Your Content',
    'Cultivate Your Creativity',
    'Get Your Message Out',
    'Delectable Data Sovereignty',
    'Release Your Inner Writer'
    // Add more headings here if desired
];

function changeHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    const randomIndex = Math.floor(Math.random() * headings.length);
    headingElement.innerHTML = headings[randomIndex];
}

document.addEventListener('DOMContentLoaded', changeHeading);
