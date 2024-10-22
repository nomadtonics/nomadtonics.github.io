// create main element
const nmmain = document.createElement('main');
nmmain.textContent = 'nomadtonics'.toUpperCase();
nmmain.setAttribute('id', 'nm-main');
nmmain.style.maxWidth = window.screen.availWidth;
nmmain.style.width = window.screen.availWidth;
nmmain.style.minWidth = window.screen.availWidth;
nmmain.style.maxHeight = window.screen.availHeight;
nmmain.style.height = window.screen.availHeight;
nmmain.style.minHeight = window.screen.availHeight;
nmmain.style.backgroundColor = '#002611';

// create a div element to display 
const landingSection = document.createElement('section');
landingSection.textContent = 'welcome to nomadtonics!';
//landingSection.setAttribute('width', 'inherit');
// landingSection.style.

// append children to the body
document.body.onload = function() {
    document.body.appendChild(nmmain);
    document.body.appendChild(landingSection);

}