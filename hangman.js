/*
Challenge: Hangman!

Create a file called hangman.js.

In this file, write a program that will let the user play hangman. The program should work as follows:

Choose a random word from a list of words.

In a loop, do the following:

Ask the user to guess a letter

If the user guessed a wrong letter, then add one step to the hangman “drawing”

Display the current completion of the word next to a hangman ASCII "drawing". You can get some inspiration from either here or here

Keep looping until either the word is found or the hangman is hanged!

Display a message to the user letting them know what happened

Save/commit/push
*/
var wrongGuesses = 0;
var theWord = "elephant";
var prompt = require('prompt');
var arrGuessCorrect = theWord.toUpperCase().split("").map(function(obj) {
    return 0;
});
var arrWord = theWord.toUpperCase().split("");

prompt.start();


function guessingPrompt() {

    displayTheWord();
    printMan();
    return prompt.get(['Guess'], function(err, result) {
        var x = result.Guess.toUpperCase();
        //console.log(arrWord);
        //console.log("type of in array " + typeof arrWord[1]);
        //console.log("type of in user input " + typeof x);
        
        
        if (arrWord.indexOf(x)===-1 && wrongGuesses < 6) {
            console.log("Guess again");
            //console.log("index: " + arrWord.indexOf(x));
            wrongGuesses++;
            if (wrongGuesses === 6) {
            console.log("Game Over!");
            displayTheWord();
            printMan();
            return;
            }
            else {
                guessingPrompt()};
        }
        else if (arrWord.indexOf(x)>-1) {
            console.log("index: " + arrWord.indexOf(x));
            
            //arrGuessCorrect[arrWord.indexOf(x)] = 1;
            /*
            for (var j in arrWord) {
                if (arrWord[j]===x) {
                    arrGuessCorrect[j] = 1;
                }
            }
            */
            arrWord.forEach(function(entry,i) {
                if (entry===x) {
                    arrGuessCorrect[i] = 1;
                }
            })
            
            if (arrGuessCorrect.indexOf(0) === -1) {
                displayTheWord();
                console.log("You win");
                return;
            }
            guessingPrompt();
        }
        
    });
};

//arrGuessCorrect = [0,1,0,1];
function displayTheWord() {

    var arrTemp = [];
    console.log("Word: ");
    for (var i in arrWord) {
        if (arrGuessCorrect[i] === 0) {
            arrTemp.push("_");
        }
        else {
            arrTemp.push(arrWord[i]);
        }
    }
    console.log(arrTemp);
}


function printMan() {
    console.log("Wrong guesses :" + wrongGuesses);
    console.log(" _________     ");         //row 1
    console.log("|         |    ");         //row 2
    if (wrongGuesses >= 1) { //row 3
        console.log("|         0    ");
    }
    else {
        console.log("|              ");
    }

    if (wrongGuesses === 2) {               //row 4
        console.log("|         |    ");
    }
    else if (wrongGuesses === 3) {
        console.log("|        /|    ");
    }
    else if (wrongGuesses >= 4) {
        console.log("|        /|\\  ");
    }
    else {
        console.log("|              ");
    }

    if (wrongGuesses === 5) {               //row 5
        console.log("|        /     ");
    }
    else if (wrongGuesses >= 6) {
        console.log("|        / \\  ");
    }
    else {
        console.log("|              ");
    }

    console.log("|              ");
    console.log("|              ");
}


guessingPrompt();


/*
while (arrWord.indexOf(x)>-1) {
                for (var i in arrWord) {
                    if (x === arrWord[i]) {
                        arrGuessCorrect[i] = 1;
                    }
                }
                
            }
*/
    