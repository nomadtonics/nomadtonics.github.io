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
