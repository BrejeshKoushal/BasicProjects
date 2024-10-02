let randomNumber = parseInt(Math.random() * 100 + 1);
const submitButton = document.querySelector('.btn');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.LowOrHigh');
const startOver = document.querySelector('.results');
const winSound = new Audio('level-win-6416.mp3');
const lostSound = new Audio('negative_beeps-6008.mp3');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
let p = document.createElement('p');

if (playGame) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Range should be between 1 and 100 only');
    } else {
        prevGuess.push(guess);
    }
    if (numGuess === 5) {
        displayGuess(guess);
        displayMessage(`Game Over. The number was ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}
let won = false;

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        winSound.play();
        won = true;
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    if(!isNaN(guess)){
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${6 - numGuess}`;
    }
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    if(won!=true){
    lostSound.play();
    }
    won = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${6 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
