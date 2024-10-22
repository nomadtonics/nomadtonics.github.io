// create element variables
const nomadrootdoc = document.documentElement;
const nomadhtml = document.querySelector('html');
const nomadhead = document.querySelector('head');
const nomadtitle = document.querySelector('title');
const nomadbody = document.querySelector('body');

// bg style static elements
nomadrootdoc.style.backgroundColor = '#11269287';
nomadrootdoc.style.color = '#29049578';
nomadrootdoc.style.width = '100vw';
if (window.screen.availWidth !== nomadrootdoc.style.width) {
    nomadrootdoc.style.width = window.screen.availWidth;
}
if (window.screen.availHeight !== nomadrootdoc.style.height) {
    nomadrootdoc.style.height = window.screen.availHeight;
    nomadrootdoc.style.height = '100vh';
}

nomadhtml.style.backgroundColor = '#11269287';
nomadhtml.style.color = '#29049578';
nomadhtml.style.width = '100vw';
if (window.screen.availWidth !== nomadhtml.style.width) {
    nomadhtml.style.width = window.screen.availWidth;
}
if (window.screen.availHeight !== nomadhtml.style.height) {
    nomadhtml.style.height = window.screen.availHeight;
    nomadhtml.style.height = '100vh';
}

nomadtitle.textContent = nomadtitle.textContent.toUpperCase();

nomadbody.style.backgroundColor = '#11269287';
nomadbody.style.color = '#29049578';
nomadbody.style.width = '100vw';
if (window.screen.availWidth !== nomadbody.style.width) {
    nomadbody.style.width = window.screen.availWidth;
}
if (window.screen.availHeight !== nomadbody.style.height) {
    nomadbody.style.height = window.screen.availHeight;
    nomadbody.style.height = '100vh';
}

// create main element
const nmmain = document.createElement('main');
nmmain.style.position = 'relative';
nmmain.style.maxWidth = 'inherit';
nmmain.style.width = 'inherit';
nmmain.style.minWidth = 'inherit';
nmmain.style.maxHeight = 'inherit';
nmmain.style.height = 'inherit';
nmmain.style.minHeight = 'inherit';

// create a div element to display 
const landingSection = document.createElement('section');
landingSection.style.alignSelf = 'center';
landingSection.style.alignContent = 'center';
landingSection.style.alignItems = 'center';
landingSection.style.justifySelf = 'center';
landingSection.style.justifyContent = 'center';
landingSection.style.justifyItems = 'center';

// heading to display
const nomadheading = document.createElement('h1');
nomadheading.style.alignSelf = 'right';
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
nomadbody.onload = function() {
    nomadbody.appendChild(nmmain);
    nmmain.onload = function(){
        nmmain.appendChild(landingSection);
        landingSection.onload = function() {
            landingSection.appendChild(nomadheading);
        }
    }
}
nomadbody.onmouseover = function() {
    nomadbody.style.backgroundColor = '#002611';
}