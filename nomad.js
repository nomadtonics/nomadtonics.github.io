/*
// tab title
const title = document.getElementsByTagName('title')
title.style.textTransform = 'uppercase'
// root div of the app
const nomad = document.getElementById('nomad')
//const logospan = document.createElement('span')
//const titlenlogo = document.createElement('img')
//titlenlogo.setAttribute('id', 'titlenlogo')
//titlenlogo.setAttribute('alt', 'logo and title')
//titlenlogo.src = 'logo.png'
//titlenlogo.addEventListener('click', ()=> {
 //   window.location.href('/noicetom')
//})
//logospan.appendChild(titlenlogo)
//nomad.appendChild(logospan)
//nomad.appendChild(titlenlogo)
//const loginform = document.createElement('form')
//loginform.setAttribute('id','loginform')
//loginform.innerHTML = `
//<legend>login</legend>
//<label>username</label>
//<input type='text' id='username' name='username' required>
//<label>password</label>
//<input type='password' id='password' required>
//<input type='submit' value='login' id='loginformbutton>
//<span id='loginformspan'>don't have an account<br/>sign up <a href='#'>here</a></span>`
//nomad.appendChild(loginform)
// navigation bar for the app
//const navbar = document.createElement('nav')
// set navigation bar id
//navbar.setAttribute('id', 'navbar')
// content to be displayed
//navbar.innerHTML = `
<ul id='logo-container'>
<li id='logo-container'><img src='./logo.png' alt='no mad logo' id='logo-image'></li>
</ul>
<ul id='menu-items'>
<li id='menu-item'>login</li>
<li id='menu-item'>sign up</li>
</ul>`
const mainsection = document.createElement('section')
mainsection.innerHTML = `
<h1 id='mainsecheading'>no mad</h1>
<p id='mainsecpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Soluta illo officia repudiandae ipsam delectus reiciendis, modi, explicabo consequuntur voluptate nihil accusantium quaerat quibusdam! Nulla sequi quod molestias? Illum!</p>
<span id='small-text'></span>`
mainsection.setAttribute('id', 'mainsection')
const mainfooter = document.createElement('footer')
nomad.appendChild(navbar)
nomad.appendChild(mainsection)
*/

const nomad = document.getElementById('nomad')
nomad.setAttribute('id', 'nomad')
const nomadheading = document.createElement('h1')
nomadheading.setAttribute('id', 'nomad-heading')
nomadheading.textContent = 'guess the number'
nomad.appendChild(nomadheading)
const nomadresult = document.createElement('p')
nomadresult.setAtrribute('id', 'result')
const nomadguess = document.createElement('input')
nomadguess.setAttribut('type', 'number')
nomadguess.setAttribut('id', 'guess')
const nomadrestart = document.createElement('button')
const nomadsubmit = document.createElement('button')
nomadsubmit.setAttribute('id', 'sbumitGuess')

let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    attempts = 0;
    nomadresult.textContent = "";
    nomadguess.value = "";
    nomadrestart.style.display = "none";
}

function checkGuess() {
    const guess = Number(nomadguess.value);
    attempts++;

    if (guess < 1 || guess > 100) {
        nomadresult.textContent = "Please enter a number between 1 and 100.";
    } else if (guess < randomNumber) {
        nomadresult.textContent = "Too low! Try again.";
    } else if (guess > randomNumber) {
        nomadresult.textContent = "Too high! Try again.";
    } else {
        nomadresult.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
        nomadrestart.style.display = "inline";
    }
}

nomadsubmit.addEventListener("click", checkGuess);
nomadrestart.addEventListener("click", startGame);

// Start the game when the page loads
window.onload = startGame;
