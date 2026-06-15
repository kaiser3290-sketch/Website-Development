// Demon Slayer Website - Main JS File

// Navigation Menu
const navItems = [
    { name: 'Home', url: '#home' },
    { name: 'Characters', url: '#characters' },
    { name: 'Story', url: '#story' },
    { name: 'Gallery', url: '#gallery' },
    { name: 'Contact', url: '#contact' }
];

// Featured Characters
const characters = [
    {
        id: 1,
        name: 'Tanjiro Kamado',
        role: 'Protagonist',
        description: 'A kind-hearted demon slayer with a dark past',
        image: 'tanjiro.jpg'
    },
    {
        id: 2,
        name: 'Nezuko Kamado',
        role: 'Demon',
        description: 'A demon who retains her humanity',
        image: 'nezuko.jpg'
    },
    {
        id: 3,
        name: 'Hashira',
        role: 'Elite Swordsmen',
        description: 'The strongest members of the Demon Slayer Corps',
        image: 'hashira.jpg'
    }
];

// Initialize website
function initWebsite() {
    renderNavigation();
    renderCharacters();
}

function renderNavigation() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = navItems.map(item => `<a href="${item.url}">${item.name}</a>`).join('');
}

function renderCharacters() {
    const container = document.getElementById('characters-container');
    container.innerHTML = characters.map(char => `
        <div class="character-card">
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p class="role">${char.role}</p>
            <p>${char.description}</p>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initWebsite);