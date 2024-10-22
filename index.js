// create element variables
const nomadrootdoc = document.documentElement;
const nomadhtml = document.querySelector('html');
const nomadhead = document.querySelector('head');
const nomadtitle = document.querySelector('title');
const nomadbody = document.querySelector('body');

// bg style static elements
nomadrootdoc.style.backgroundColor = '#11269287';
nomadrootdoc.style.color = '#29049578';
nomadrootdoc.style.width = window.screen.availWidth;
nomadrootdoc.style.height = window.screen.availHeight;

nomadhtml.style.backgroundColor = '#112600';
nomadhtml.style.color = '#29049578';
// nomadhtml.style.width = window.screen.availWidth;
nomadhtml.style.width = '600px';
// nomadhtml.style.height = window.screen.availHeight;
nomadhtml.style.height = '600px';

nomadtitle.textContent = nomadtitle.textContent.toUpperCase();

nomadbody.style.backgroundColor = '#110000';
nomadbody.style.color = '#29049578';
// nomadbody.style.width = window.screen.availWidth;
nomadbody.style.width = '250px';
nomadbody.style.height = '25px';

// create main element
const nomadmain = document.createElement('main');
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
    nomadmain.onload = function(){
        nomadmain.appendChild(sectionone);
        sectionone.onload = function() {
            sectionone.appendChild(nomadheading);
        }
    }
}
nomadbody.onmouseover = function() {
    nomadbody.style.backgroundColor = '#002611';
}