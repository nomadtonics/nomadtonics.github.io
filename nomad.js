const nomad = document.getElementById('landing-main');
nomad.setAttribute('id', 'landing-main');
const nomadsection = document.createElement('section');
nomadsection.setAttribute('id', 'nomad-section');
nomadsection.style.backgroundColor = 'transparent';
nomadsection.style.letterSpacing = '8rem';

const nomadheading = document.createElement('h1');
nomadheading.setAttribute('id', 'nomad-heading');
nomadheading.textContent = 'no mad';
nomadheading.style.textTransform = 'uppercase';
nomadheading.style.fontSize = '26px';
nomadheading.style.height = '92px';
//nomadheading.style.
nomadsection.appendChild(nomadheading);
nomad.appendChild(nomadsection);
// const nomadresult = document.createElement('p')
// nomadresult.setAttribute('id', 'result')
// const nomadguess = document.createElement('input')
// nomadguess.setAttribute('type', 'number')
// nomadguess.setAttribute('id', 'guess')
// const nomadrestart = document.createElement('button')
// const nomadsubmit = document.createElement('button')
// nomadsubmit.setAttribute('id', 'submitGuess')

// nomad.appendChild(nomadguess)
// nomad.appendChild(nomadsubmit)
// nomad.appendChild(nomadresult)
// nomad.appendChild(nomadrestart)

// let randomNumber;
// let attempts = 0;

// function startGame() {
//     randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
//     attempts = 0;
//     nomadresult.textContent = "";
//     nomadguess.value = "";
//     nomadrestart.style.display = "none";
// }

// function checkGuess() {
//     const guess = Number(nomadguess.value);
//     attempts++;

//     if (guess < 1 || guess > 100) {
//         nomadresult.textContent = "Please enter a number between 1 and 100.";
//     } else if (guess < randomNumber) {
//         nomadresult.textContent = "Too low! Try again.";
//     } else if (guess > randomNumber) {
//         nomadresult.textContent = "Too high! Try again.";
//     } else {
//         nomadresult.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
//         nomadrestart.style.display = "inline";
//     }
// }

// nomadsubmit.addEventListener("click", checkGuess);
// nomadrestart.addEventListener("click", startGame);

// // Start the game when the page loads
// window.onload = startGame;
