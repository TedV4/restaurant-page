import "./style.css";

const mainContainer = document.querySelector("content");

//Create header
const header = document.createElement("header");
const nav = document.createElement("nav");
const aboutBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

nav.append(aboutBtn, menuBtn, contactBtn);
header.appendChild(nav);
mainContainer.append(header);

