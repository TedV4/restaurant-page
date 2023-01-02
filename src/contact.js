const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');
const contactTitle = document.createElement('h1');
contactTitle.textContent = 'Contact Us';

contactContainer.appendChild(contactTitle);

const phone = document.createElement('p');
phone.textContent = 'Phone: (123)-456-789';
contactContainer.appendChild(phone);

const email = document.createElement('p');
email.textContent = 'Email: pizza@pizza.com';
contactContainer.appendChild(email);

function displayContact(container) {
    container.appendChild(contactContainer);
}

export default displayContact;

