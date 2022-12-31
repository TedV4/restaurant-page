import "./style.css";

const mainContainer = document.querySelector(".content");

//Create header
const header = document.createElement("header");
const nav = document.createElement("nav");
const aboutBtn = document.createElement("button");
aboutBtn.textContent = "About";
const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";

nav.appendChild(aboutBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
header.appendChild(nav);
mainContainer.appendChild(header);
