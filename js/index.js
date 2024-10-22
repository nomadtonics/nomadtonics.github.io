const nomad = require('./js/nomad.js').nomadtemplate;
// create element variables
const nomadrootdoc = document.documentElement;
const nomadhtml = document.querySelector('html');
const nomadhead = document.querySelector('head');
const nomadtitle = document.querySelector('title');
const nomadbody = document.querySelector('body');

// bg style static elements
nomadrootdoc.style.backgroundColor = '#000';
nomadrootdoc.style.color = '#fff';
// nomadrootdoc.style.width = window.screen.availWidth;
// nomadrootdoc.style.height = window.screen.availHeight;
nomadrootdoc.style.width = '50%';
nomadrootdoc.style.height = '50%';

nomadhtml.style.backgroundColor = '#002611';
nomadhtml.style.color = '#000429';
nomadhtml.style.width = window.screen.availWidth;
nomadhtml.style.height = window.screen.availHeight;

nomadtitle.textContent = nomadtitle.textContent.toUpperCase();

nomadbody.style.backgroundColor = '#042900';
nomadbody.style.color = '#261100';
// nomadbody.style.width = window.screen.availWidth;
// nomadbody.style.height = window.screen.availHeight;
nomadbody.style.width = '25%';
nomadbody.style.height = '25%';

// create main element
const nomadmain = nomad('main');
nomadmain.style.position = 'relative';
nomadmain.style.width = 'inherit';
nomadmain.style.height = 'inherit';

// create a div element to display 
const sectionone = document.createElement('section');
sectionone.style.position = 'absolute';
sectionone.style.top = '8%';
sectionone.style.left = '8%';
sectionone.style.alignSelf = 'center';
sectionone.style.alignContent = 'center';
sectionone.style.alignItems = 'center';
sectionone.style.justifySelf = 'center';
sectionone.style.justifyContent = 'center';
sectionone.style.justifyItems = 'center';

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
    nomadbody.appendChild(nomadmain);
}
nomadbody.onmouseover = function() {
    nomadbody.style.backgroundColor = '#002611';
}
nomadmain.onload = function(){
    nomadmain.appendChild(sectionone);
}
sectionone.onload = function() {
    sectionone.appendChild(nomadheading);
}