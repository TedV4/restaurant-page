import "./style.css";
import displayAbout from "./about";
import displayMenu from "./menu";
import displayContact from "./contact";

const mainContainer = document.querySelector(".content");

//Remove all children from parent container
function removeContent() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
};

//Create header
const header = document.createElement("header");
const nav = document.createElement("nav");

//Nav buttons, these will update the display with their respective content on click
const aboutBtn = document.createElement("button");
aboutBtn.textContent = "About";
aboutBtn.addEventListener("click", function () {
  removeContent();
  mainContainer.appendChild(header);
  displayAbout(mainContainer);
});

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
menuBtn.addEventListener("click", function () {
  removeContent();
  mainContainer.appendChild(header);
  displayMenu(mainContainer);
});

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";
contactBtn.addEventListener("click", function () {
  removeContent()
  mainContainer.appendChild(header);
  displayContact(mainContainer);
});

//Attach all elements to the main container
nav.appendChild(aboutBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
header.appendChild(nav);
mainContainer.appendChild(header);

// //Initialize the page with the 'About' section displayed
displayAbout(mainContainer);
