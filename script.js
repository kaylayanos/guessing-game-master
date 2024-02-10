// Variable initialization
let targetNumber = generateRandomNumber();
let hasPlayed = false;

// Function to generate a random number from 1 to 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const userGuess = parseInt(guessInput.value);
    const message = document.getElementById('message');
    const playAgainButton = document.getElementById('playAgainButton');

    // Check if the guess is correct
    if (userGuess === targetNumber) {
        showPlayAgainButton();
        message.textContent = 'Congratulations! You guessed the correct number!';
    } else {
        // Incorrect guess
        message.textContent = 'Wrong guess. Try again!';
        message.classList.remove('success-message');
    }
}

// Function to reset the game
function playAgain() {
    const playAgainButton = document.getElementById('playAgainButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    // Remove "Play Again" button
    if (playAgainButton) {
        playAgainButton.remove();
    }

    // Reset the target number
    targetNumber = generateRandomNumber();

    // Clear the input
    guessInput.value = '';

    // Update the message
    message.textContent = 'Guess a number between 1 and 5';
}

// Function to show "Play Again" button
function showPlayAgainButton() {
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.id = 'playAgainButton';
    playAgainButton.addEventListener('click', playAgain);
    const body = document.body;
    body.appendChild(playAgainButton);
}
