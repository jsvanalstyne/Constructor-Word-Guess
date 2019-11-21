var Letter = require("./letter");


function Word(randomWord) {
    // this.randomWordArray = randomWord.split("").map(eachLetter => { return new Letter(eachLetter) });(study .map, .filter, .forEach)

    this.randomWordArray = [];
    this.wordToLettersArray = function () {
        // create objects for letters and then pushing to an array
        this.randomWordArray = [];
        for (var i = 0; i < randomWord.length; i++) {

            var letterObject = new Letter(randomWord.charAt(i));
            this.randomWordArray.push(letterObject);
        }

    }
    this.displayRandomWord = function () {
        var word = [];

        for (var i = 0; i < this.randomWordArray.length; i++) {
            var letterDisplay = this.randomWordArray[i].getDisplay();
            word.push(letterDisplay);

        }
        console.log(word.join(" ").toString());
    }

    this.guessCheck = function (userLetter) {
        var containsLetter = false;
        for (var i = 0; i < this.randomWordArray.length; i++) {
            if (this.randomWordArray[i].checkLetter(userLetter)) {
                containsLetter = true;
                console.log("you guessed correctly!")
            }

        }
        return containsLetter
    }
}


// var duck = new Word("duck");
// duck.displayRandomWord();
// console.log(typeof duck);
// console.log(duck);
module.exports = Word;