const nomadtitle = document.querySelector('title');
nomadtitle.textContent = nomadtitle.textContent.toUpperCase();

if (window.screen.availWidth === '430px') {
    console.log('logging is working');
}



document.body.style.maxWidth = window.screen.availWidth;
document.body.style.width = window.screen.availWidth;
document.body.style.minWidth = window.screen.availWidth;
document.body.style.maxHeight = window.screen.availHeight;
document.body.style.height = window.screen.availHeight;
document.body.style.minHeight = window.screen.availHeight;
document.body.style.backgroundColor = '#002611';

// create main element
const nmmain = document.createElement('main');
console.log(nmmain.style);
//nmmain.textContent = 'nomadtonics'.toUpperCase();
//nmmain.setAttribute('id', 'nm-main');
//nmmain.style.fontSize = '300%';
//nmmain.style.alignSelf = 'center';
//nmmain.style.justifySelf = 'center';
//nmmain.style.alignContent = 'center';
//nmmain.style.justifyContent = 'center';
nmmain.style.position = 'relative';
nmmain.style.maxWidth = 'inherit';
nmmain.style.width = 'inherit';
nmmain.style.minWidth = 'inherit';
nmmain.style.maxHeight = 'inherit';
nmmain.style.height = 'inherit';
nmmain.style.minHeight = 'inherit';
// nmmain.style.backgroundColor = '#002611';

// create a div element to display 
const landingSection = document.createElement('section');
landingSection.style.alignSelf = 'center';
landingSection.style.alignContent = 'center';
landingSection.style.alignItems = 'center';
landingSection.style.justifySelf = 'center';
landingSection.style.justifyContent = 'center';
landingSection.style.justifyItems = 'center';

//landingSection.textContent = 'welcome to nomadtonics!';
//landingSection.setAttribute('width', 'inherit');
// landingSection.style.

const nomadheading = document.createElement('h1');
nomadheading.style.alignSelf = 'right';
// nomadheading.style.justifySelf = 'right';
nomadheading.textContent = `${nomadtitle.textContent} ello world welcome to the place where you're lost enough to guide me where i am.`;
nomadheading.style.fontSize = '100%';
nomadheading.style.textShadow = '0 0 0.26em #929500';
nomadheading.style.color = '#929500';
//nomadheading.style.background = 'transparent';
// nomadheading.style.padding = '8%';
// nomadheading.style.textAlign = 'right';
// nomadheading.style.boxShadow = 'inset 0 0 0.26em 0 #929500';
// nomadheading.style.borderRadius = '3.2em 0.26em 0.11em 0.26em';
nomadheading.style.letterSpacing = '0.092em';
// append children to the body
document.body.onload = function() {
    document.body.appendChild(nmmain);
    nmmain.appendChild(landingSection);
    landingSection.appendChild(nomadheading)

}