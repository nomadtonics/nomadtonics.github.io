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

// Function to create an SVG with a circle and rectangle
function createSVG() {
  // Create SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '200');
  svg.setAttribute('height', '200');
  svg.setAttribute('viewBox', '0 0 200 200');

  // Create a circle
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '100');
  circle.setAttribute('cy', '100');
  circle.setAttribute('r', '50');
  circle.setAttribute('fill', 'blue');

  // Create a rectangle
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', '20');
  rect.setAttribute('y', '20');
  rect.setAttribute('width', '60');
  rect.setAttribute('height', '60');
  rect.setAttribute('fill', 'red');

  // Append shapes to SVG
  svg.appendChild(circle);
  svg.appendChild(rect);

  // Append SVG to a container in the HTML
  document.getElementById('svgContainer').appendChild(svg);
}

// Call the function when the page loads
window.onload = createSVG;

nomadmain.appendChild(logo);
nomadmain.appendChild(logincard);