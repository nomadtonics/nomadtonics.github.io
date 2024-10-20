// landing main page
const nomad = document.getElementById('landing-main');
// set attribute to style landing page
nomad.setAttribute('id', 'landing-main');
nomad.style.backgroundColor = '#00000008';
nomad.style.color = '00261192';

// create a section in landing page
const nomadsectione = document.createElement('section');
// set attribute to style landing page
nomadsectione.setAttribute('id', 'nomad-sectione');
nomadsectione.style.backgroundColor = '#00000011';
// create a heading in landing page
const nomadheadingone = document.createElement('h1');
// set attribute to style landing page
nomadheadingone.setAttribute('id', 'nomad-heading-one');
nomadheadingone.textContent = 'no mad';
nomadheadingone.style.textTransform = 'uppercase';
nomadheadingone.style.letterSpacing = '8rem';
nomadheadingone.style.fontSize = '269%';
nomadheadingone.style.textAlign = 'center';
// append heading to section element
nomadsectione.appendChild(nomadheadingone);
// append heading to main element
nomad.appendChild(nomadsectione);

const nomadsectiontwo = document.createElement('section');
// set attribute to style landing page
nomadsectiontwo.setAttribute('id', 'nomad-sectiontwo');
nomadsectiontwo.style.backgroundColor = '#00000011';
// create a heading in landing page
const nomadheadingtwo = document.createElement('h1');
// set attribute to style landing page
nomadheadingtwo.setAttribute('id', 'nomad-heading-two');
nomadheadingtwo.textContent = 'no mad';
nomadheadingtwo.style.textTransform = 'uppercase';
nomadheadingtwo.style.letterSpacing = '8rem';
nomadheadingtwo.style.fontSize = '269%';
nomadheadingtwo.style.textAlign = 'center';
// append heading to section element
nomadsectiontwo.appendChild(nomadheadingtwo);
// append heading to main element
nomad.appendChild(nomadsectiontwo);