const justnomad = document.createElement('div');
justnomad.textContent = 'no mad'.toUpperCase();
justnomad.style.border = '0';
justnomad.style.fontSize = '300%';
justnomad.style.letterSpacing = '2.6px';
document.body.appendChild(justnomad)
const aBouncingBall = document.createElement('div')
aBouncingBall.textContent = 'no mad'.toUpperCase();
aBouncingBall.style.fontSize = '678%';
aBouncingBall.style.height = '250px';
aBouncingBall.style.color = '#001928';
aBouncingBall.style.alignSelf = 'right';
aBouncingBall.style.width = '250px';
aBouncingBall.style.borderRadius = '25% 83% 36% 25%';
aBouncingBall.style.backgroundColor = '#2611af';
document.body.appendChild(aBouncingBall);
document.addEventListener('DOMContentLoaded', () => {
    // const text = document.getElementById('animated-text');
    justnomad.style.opacity = '1';
    justnomad.style.transform = 'translateY(0)';
});
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
nomadsectione.style.backgroundColor = '#08080845';
// create a heading in landing page
const nomadheadingone = document.createElement('h1');
// set attribute to style landing page
nomadheadingone.setAttribute('id', 'nomad-heading-one');
nomadheadingone.textContent = 'no mad';
nomadheadingone.style.textTransform = 'uppercase';
// nomadheadingone.style.letterSpacing = '2.6em';
// nomadheadingone.style.fontSize = '269%';
nomadheadingone.style.textAlign = 'center';
// append heading to section element
nomadsectione.appendChild(nomadheadingone);
// append heading to main element
nomad.appendChild(nomadsectione);

const loginsection = document.createElement('section')

const loginform = document.createElement('form')
loginform.setAttribute('id', 'landing-login-form')

const loginlegend = document.createElement('legend')

const loginput = document.createElement('input')
loginput.setAttribute('type', 'text')

const passinput = document.createElement('input')
passinput.setAttribute('type', 'password')

const loginbtn = document.createElement('button')
loginbtn.setAttribute('type', 'submit')

loginform.appendChild(loginlegend)
loginform.appendChild(loginput)
loginform.appendChild(passinput)
loginform.appendChild(loginbtn)
loginsection.appendChild(loginform)
nomad.appendChild(loginsection)