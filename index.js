var Word = require("./word");
var currentWord;
var arrayOfWords = ["cat", "dog", "fish"];
// var rand = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
// console.log(rand);
var newRandomWord = new Word(arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]);
console.log(newRandomWord)
var inquirer = require("inquirer");
function displayUnderscores() {

    newRandomWord.displayRandomWord();
    // display remainging guesses. 
}



function playHangman() {
    displayUnderscores();

    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "keystroke"
        }
    ]).then(function (user) {
        // console.log(user.keystroke);
        // (typeof user.keystroke);

        // newRandomWord.guessCheck(user.keystroke);
        // newRandomWord.displayUnderscores();



    });


}
// inquirer.prompt([
// Continuously display word and ask for user guess, then check if correct
// create a function to hold all of the game functions
// Inside this function, first display underscores, then prompt for user input, then check user input against chosen word. If it matches, replace underscore with letter at that index(handled by word and letter constructors), check to see if they have won. If they have won, say 'You won'. Then ask if they want to play again? if they guessed incorrectly,  remove one of their guesses and say you guessed incorrectly. Create check remaining guess function. 



// ]);
// newRandomWord.wordToLettersArray();
// playHangman();
// displayUnderscores();

// Pay attention to file structure. TEST TEST TEST as you go. Use postman to test routes before connecting to frontend. 