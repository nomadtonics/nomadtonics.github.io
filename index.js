document.body.style.maxWidth = window.screen.availWidth;
document.body.style.width = window.screen.availWidth;
document.body.style.minWidth = window.screen.availWidth;
document.body.style.maxHeight = window.screen.availHeight;
document.body.style.height = window.screen.availHeight;
document.body.style.minHeight = window.screen.availHeight;
// create main element
const nmmain = document.createElement('main');
nmmain.textContent = 'nomadtonics'.toUpperCase();
nmmain.setAttribute('id', 'nm-main');
document.body.style.maxWidth = window.screen.availWidth;
document.body.style.width = window.screen.availWidth;
document.body.style.minWidth = window.screen.availWidth;
document.body.style.maxHeight = window.screen.availHeight;
document.body.style.height = window.screen.availHeight;
document.body.style.minHeight = window.screen.availHeight;
nmmain.style.backgroundColor = '#002611';

// create a div element to display 
const landingSection = document.createElement('section');
landingSection.textContent = 'welcome to nomadtonics!';
//landingSection.setAttribute('width', 'inherit');
// landingSection.style.

// append children to the body
document.body.onload = function() {
    document.body.appendChild(nmmain);
    nmmain.appendChild(landingSection);

}