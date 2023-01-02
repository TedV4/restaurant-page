const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
const menuTitle = document.createElement('h1');
menuTitle.textContent = 'Menu';
menuContainer.appendChild(menuTitle);

const menuItems = document.createElement('div');
const meat = document.createElement('p');
meat.textContent = 'Meat, 10.99';
const veggie = document.createElement('p');
veggie.textContent = 'Veggie, 8.99';
const cheese = document.createElement('p');
cheese.textContent = 'Cheese, 7.99';
menuItems.appendChild(meat);
menuItems.appendChild(veggie);
menuItems.appendChild(cheese);

menuContainer.appendChild(menuItems);

function displayMenu(container) {
    container.appendChild(menuContainer);
}

export default displayMenu;