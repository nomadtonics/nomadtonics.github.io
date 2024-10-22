document.body.style.maxWidth = window.screen.availWidth;
document.body.style.width = window.screen.availWidth;
document.body.style.minWidth = window.screen.availWidth;
document.body.style.maxHeight = window.screen.availHeight;
document.body.style.height = window.screen.availHeight;
document.body.style.minHeight = window.screen.availHeight;
document.body.style.backgroundColor = '#002611';
// create main element
const nmmain = document.createElement('main');
//nmmain.textContent = 'nomadtonics'.toUpperCase();
//nmmain.setAttribute('id', 'nm-main');
//nmmain.style.fontSize = '300%';
nmmain.style.alignSelf = 'center';
nmmain.style.justifySelf = 'center';
nmmain.style.justifyContent = 'center';
nmmain.style.maxWidth = 'inherit';
nmmain.style.width = 'inherit';
nmmain.style.minWidth = 'inherit';
nmmain.style.maxHeight = 'inherit';
nmmain.style.height = 'inherit';
nmmain.style.minHeight = 'inherit';
// nmmain.style.backgroundColor = '#002611';

// create a div element to display 
const landingSection = document.createElement('section');
//landingSection.textContent = 'welcome to nomadtonics!';
//landingSection.setAttribute('width', 'inherit');
// landingSection.style.
const nomadtitle = document.querySelector('title');
nomadtitle.textContent = nomadtitle.textContent.toUpperCase();

const nomadheading = document.createElement('h1');
nomadheading.textContent = nomadtitle.textContent;
nomadheading.style.fontSize = '300%';
nomadheading.style.textShadow = '0 0 0.26em #929500';
nomadheading.style.color = '#929500';
nomadheading.style.background = 'transparent';
nomadheading.style.padding = '8%';
nomadheading.style.textAlign = 'right';
nomadheading.style.boxShadow = 'inset 0 0 0.26em 0 #929500';
nomadheading.style.borderRadius = '2.6em 0.26em 0.11em 0.26em';
// append children to the body
document.body.onload = function() {
    document.body.appendChild(nmmain);
    document.body.appendChild(nomadtitle);
    nmmain.appendChild(landingSection);
    landingSection.appendChild(nomadheading)

}