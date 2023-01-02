const aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-container");

const aboutText = document.createElement("div");
aboutText.classList.add("about-text");

const aboutTitle = document.createElement("h1");
aboutTitle.textContent = "Our Story";

const aboutSubtext = document.createElement("p");
aboutSubtext.textContent = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
scelerisque velit quis sem tempor, nec commodo urna elementum.
Aenean commodo consequat erat in mattis. Fusce pretium lorem in elit
euismod, accumsan semper diam consectetur. Sed sit amet turpis
pulvinar, posuere leo non, fringilla mi. Suspendisse elementum
feugiat nunc, ac semper massa malesuada eget. Praesent porttitor
dignissim eleifend. Aliquam ut molestie lectus, at iaculis arcu.
Quisque vitae lacus orci. Fusce porttitor magna ac posuere aliquet.
In facilisis mi sed purus vehicula, a mattis orci scelerisque.`;

aboutText.appendChild(aboutTitle);
aboutText.appendChild(aboutSubtext);
//The container with the 'About' section content is now complete and ready to be imported by index.js
aboutContainer.appendChild(aboutText);

function displayAbout(container) {
  container.appendChild(aboutContainer);
}

export default displayAbout;
