const nomad = document.getElementById('nomad')
nomad.setAttribute('id', 'nomad')
const nomadheading = document.createElement('h1')
nomadheading.setAttribute('id', 'nomad-heading')
nomadheading.textContent = 'guess the number'
nomad.appendChild(nomadheading)
const nomadresult = document.createElement('p')
nomadresult.setAttribute('id', 'result')
const nomadguess = document.createElement('input')
nomadguess.setAttribute('type', 'number')
nomadguess.setAttribute('id', 'guess')
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
