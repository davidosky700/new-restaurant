import './style.css'
import { setupCounter } from './counter.js'

const menuItems = [
    {
        name: "Margherita Pizza",
        description: "Fresh tomatoes, mozzarella, basil, and olive oil",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Pasta Carbonara",
        description: "Spaghetti with crispy pancetta, egg, and pecorino romano",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Osso Buco",
        description: "Braised veal shanks with gremolata and risotto alla milanese",
        price: "$28.99",
        image: "https://t4.ftcdn.net/jpg/12/67/23/67/240_F_1267236779_c6mwQ1XeXGuLqO3upbHxunv1diYIAg9L.jpg"
    },
    {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
];

function populateMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

function handleNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function handleContactForm() {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        message.textContent = 'Thank you for your message! We will get back to you soon.';
        message.classList.remove('hidden');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateMenu();
    handleNavigation();
    handleContactForm();

    const yearElement = document.getElementById("year");
    if (yearElement) yearElement.textContent = new Date().getFullYear();
});
