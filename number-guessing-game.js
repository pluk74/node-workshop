/*
The Penniless Gambler

Challenge: create a simple HTML file that will only be used for the purposes of running JavaScript in the browser. Create a guess.js file and add it to a <script> tag of your HTML file. This is simply so you can load your HTML file in the browser and do the challenge: creating a number guessing game.

Generate a random number between 1 and 100. Using the browser functions prompt and alert, ask the user to guess the number. You should give them 4 tries to guess the number. If they guess wrong, tell them if it's higher or lower. If they guess right, congratulate them. Otherwise, give them a message saying what the correct number was, as well as their list of guesses.

**********************************************************************

Number guessing game!

Create a file called number-guessing-game.js.

In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!

Instead of using prompt and alert, you will have to use capabilities from NodeJS and any external module. HINT: there is an npm library called prompt that can help you with that :)

Save/commit/push
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var theNumber = getRandomInt(2, 2);
var guessCount = 1;
var prompt = require('prompt');
var guessResult = 0;

prompt.start();

function guessingPrompt() {
    console.log("Guess # " + guessCount);
   return prompt.get(['Guess'], function(err, result) {
        // console.log(typeof parseInt(result.Guess));
        // console.log(typeof theNumber);
        // console.log("random number: " + theNumber + ", your guess: " + result.Guess);
        
        if (theNumber !== parseInt(result.Guess) && guessCount < 5) {
            console.log("Guess again");
            guessCount++;
            guessingPrompt()
        } else if (theNumber ===parseInt(result.Guess)) {
            console.log("YOU win!")
            return;
        } else {
            console.log("SUCK")
        }
    });
};

guessingPrompt()