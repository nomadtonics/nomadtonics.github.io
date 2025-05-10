import nomadtemplate from './nomad.js';

const nomadmain = document.getElementById("nomad-main");
nomadmain.textContent = "welcome to nomads".toUpperCase();

const logincard = document.createElement("div");
const usernameInput = document.createElement("input");
const passkeyInput = document.createElement("input");
const loginbtn = document.createElement("input");

logincard.appendChild(usernameInput);
logincard.appendChild(passkeyInput);
logincard.appendChild(loginbtn);

const logo = document.createElement("div");
logo.setAttribute("id", "svgContainer");

import createSVG from logosvg.js;

// Call the function when the page loads
window.onload = createSVG;
nomadmain.appendChild(logo);
nomadmain.appendChild(logincard);
