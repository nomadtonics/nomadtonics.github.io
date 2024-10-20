// landing main page
const nomad = document.getElementById('landing-main');
// set attribute to style landing page
nomad.setAttribute('id', 'landing-main');
nomad.style.maxWidth = '100vw';
nomad.style.maxHeight = '100vh';
nomad.style.backgroundColor = '#';
nomad.style.color = '#af000092';

// create a section in landing page
const nomadsectione = document.createElement('section');
// set attribute to style landing page
nomadsectione.setAttribute('id', 'nomad-sectione');
nomadsectione.style.backgroundColor = 'transparent';
nomadsectione.style.letterSpacing = '8rem';
// create a heading in landing page
const nomadheadingone = document.createElement('h1');
// set attribute to style landing page
nomadheadingone.setAttribute('id', 'nomad-heading-one');
nomadheadingone.textContent = 'no mad';
nomadheadingone.style.textTransform = 'uppercase';
nomadheadingone.style.fontSize = '269%';
// append heading to section element
nomadsectione.appendChild(nomadheadingone);
// append heading to main element
nomad.appendChild(nomadsectione);
// async function
async function getDlocation(params) {
    if(!location){
        throw new Error("no location");        
    }
    await params
}