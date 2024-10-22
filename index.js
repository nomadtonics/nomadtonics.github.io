document.body.style.maxWidth = window.screen.availWidth;
document.body.style.width = window.screen.availWidth;
document.body.style.minWidth = window.screen.availWidth;
document.body.style.maxHeight = window.screen.availHeight;
document.body.style.height = window.screen.availHeight;
document.body.style.minHeight = window.screen.availHeight;
document.body.style.backgroundColor = '#002611';
// create main element
const nmmain = document.createElement('main');
nmmain.textContent = 'nomadtonics'.toUpperCase();
nmmain.setAttribute('id', 'nm-main');
nmmain.style.fontSize = '300%';
// nmmain.style.maxWidth = window.screen.availWidth;
// nmmain.style.width = window.screen.availWidth;
// nmmain.style.minWidth = window.screen.availWidth;
// nmmain.style.maxHeight = window.screen.availHeight;
// nmmain.style.height = window.screen.availHeight;
// nmmain.style.minHeight = window.screen.availHeight;
// nmmain.style.backgroundColor = '#002611';

// create a div element to display 
const landingSection = document.createElement('section');
landingSection.textContent = 'welcome to nomadtonics!';
//landingSection.setAttribute('width', 'inherit');
// landingSection.style.
const nomadtitle = document.querySelector('title');
nomadtitle.textContent = nomadtitle.textContent.toUpperCase();

const nomadheading = document.createElement('h1');
nomadheading.textContent = nomadtitle.textContent;

// append children to the body
document.body.onload = function() {
    document.body.appendChild(nmmain);
    document.body.appendChild(nomadtitle);
    nmmain.appendChild(landingSection);
    landingSection.appendChild(nomadheading)

}