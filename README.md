# Guessing Game

### Description
This is a simple game. The computer will come up with a random number from a given range of numbers. Then, the user will be able to input numbers until the user guesses the random number correctly.

### Difficulty
Beginner

### Prerequisites
- JS variables
- JS conditionals
- JS functions
- JS loops

### Setup
Create the following files:
- index.html
- style.css
- script.js

### Part 1: HTML
1. Start by editing the `<head>` tags. We will link the css here. Make sure that you are linking the style.css file correctly!
   ```
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width">
     <title>Guessing Game</title>
     <link href="style.css" rel="stylesheet" type="text/css" />
   </head>
   ```
2. Now, we will edit the `<body>` tags. This is were we will the game and link the script.js file. Edit the inside of the in `<p>` tag with the description of the game.
   ```
   <body>
      <h1>Guessing Game!</h1>
      <p>Description of game</p>

     <div>
         <h1>Guessing Game</h1>
         <p id="message">Guess a number between 1 and 5</p>
         <input type="number" id="guessInput">
         <button onclick="checkGuess()">Submit Guess</button>
         <script src="script.js"></script>
     </div>
   
     <script src="script.js"></script>
   </body>
   ```

### Part 2: CSS
1. Target the `body` and `div` element:
   Set the `font-family' to 'Arial, sans-serif'.
   Set `text-align` to `center`.
2. Target the `h1` element:
   Set the `color` to `#3498db`.
3. Target the `messages` id. This will be implemented in part 3 in the script.js file:
   Set the `font-size` to `18px`.
4. Target the `input` element:
   Set the `padding` to `5px`.
   Set the `margin` to `10px`.
5. Target the `button` element:
   Set the `padding` to `8px 16px`.
   Set the `font-size` to `16px`.
   Set the `background-color` to `3498db`.
   Set the `color` to `#fff`.
   Set the `border` to `none`.
6. Target the `playAgainButton` id:
   Set the `margin-top` to `20px`
   Set the `background-color` to `3498db`
  

### Part 3: JS
1. First we are going to declare 2 variables that we will use for the other functions.
   ```
   let targetNumber = generateRandomNumber();
   let hasPlayed = false;
   ```
2. Now, we are going to make a `generateRandomNumber()` function that generates a random number. Right now, the range of numbers that it can be is from 1 to 5, but you can always change this.
   ```
   function generateRandomNumber() {
      return Math.floor(Math.random() * 5) + 1;
   }
   ```
3. Now, we will make a `checkguess()` function that will check if the user input is the number that was randomly generated from the `generateRandomNumber()` function from the previous step. We are going to break this function down into two parts:

   Part A: Declaring variables
   ```
   function checkGuess() {
      const guessInput = document.getElementById('guessInput');
      const userGuess = parseInt(guesssInput.value);
      const message = document.getElementById('message');
      const playAgainButton = document.getElementById('playAgainButton');
   }
   ```

   Part B: Check is the user guess is the same as the random generated number. If the number is correct, display correct message and show play again button, but if number is incorrect, display incorrect message:
   If user's guess is the same as random generated number:
   ```
   if (userGuess === targetNumber) {
      showPlayAgainButton();
      message.textContent = 'Congratulations! You guessed the correct number!';
   }
   ```
   If user's guess is not the same as random generated number:
   ```
   else {
        message.textContent = 'Wrong guess. Try again!';
        message.classList.remove('success-message');
    }
   ```
   Make sure that the if and else statements are inside the checkGuess() function.
   
5. Now we will make the `playAgain()` function that will be implemented into a `showPlayAgainButton()` function later. This function will reset the game when the play again button is pressed.

   Part A: Declaring variables:
   ```
   function playAgain() {
      const message = document.getElementById('message');
      const playAgainButton = document.getElementById('playAgainButton');
      const guessInput = document.getElementById('guessInput');
   }
   ```

   Part B: Removing the play again button and clearing input. We want to add these few lines of code after declaring the variables and before the closing brackets:
   ```
   if (playAgainButton) {
      playAgainButton.remove();
   }

   targetNumber = generateRandomNumber();

   guessInput.value = '';
   message.textContent = 'Guess a number between 1 and 5';
   ```
5. The last function we need is the `showPlayAgainButton()`. This will show the play again button once the user has correctly guessed the randomly generated number.
   ```
   function showPlayAgainButton() {
     const playAgainButton = document.createElement('button');
     playAgainButton.textContent = 'Play Again';
     playAgainButton.id = 'playAgainButton';
     playAgainButton.addEventListener('click', playAgain);
     const body = document.body;
     body.appendChild(playAgainButton);
   }
   ```

### Stretch Goals
1. Implementing a point system.
