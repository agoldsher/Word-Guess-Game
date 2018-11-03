


var dogBreeds = ["poodle", "basenji", "pug", "bulldog", "boxer", "chihuahua", "dobermann", "dachshund", "maltese", "akita", "greyhound", "dalmatian", "pinscher", "whippet"];

var currentWord = "";

var numberOfBlanks = 0;

var lettersInWord = [];

var blanksAndGuesses = [];

var guessedLetters = [];

var numberOfGuesses = 10;
var winCount = 0;
var lossCount = 0;






function beginGame() {


    // reset number of guesses
    numberOfGuesses = 15;


    // select word from the array
    currentWord = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];

    lettersInWord = currentWord.split("");

    numberOfBlanks = lettersInWord.length;



    // reset guesses
    guessedLetters = [];
    blanksAndGuesses = [];

    for (var i = 0; i < numberOfBlanks; i++) {
        blanksAndGuesses.push("_");
    }


    document.getElementById("guesses-left").innerHTML = numberOfGuesses;

    document.getElementById("blanks").innerHTML = blanksAndGuesses.join(" ");

    document.getElementById("guessed-letters").innerHTML = guessedLetters.join(" ");

}

function compareLetters(letter) {

    var letterPresentInWord = false;
    for (var i = 0; i < numberOfBlanks; i++) {
        if (lettersInWord[i] === letter) {

            letterPresentInWord = true;
        }

    }
    if (letterPresentInWord) {
        for (var j = 0; j < numberOfBlanks; j++) {
            if (lettersInWord[j] === letter) {

                blanksAndGuesses[j] = letter;
            }
        }


    }
    else {

        guessedLetters.push(letter);
        numberOfGuesses--;
    }


}

function tallyGuesses() {
    document.getElementById("guesses-left").innerHTML = numberOfGuesses;
    document.getElementById("blanks").innerHTML = blanksAndGuesses.join(" ");
    document.getElementById("guessed-letters").innerHTML = guessedLetters.join(" ");


    if (lettersInWord.toString() === blanksAndGuesses.toString()) {
        winCount++;
        alert("Congrats! You won this round!");

        document.getElementById("win-count").innerHTML = winCount;
        beginGame();
    }

    else if (numberOfGuesses === 0) {
        lossCount++;
        alert("Uh oh! You lost this round!")

        document.getElementById("loss-count").innerHTML = lossCount;

        beginGame();

    }
}





beginGame();

document.onkeyup = function (event) {
    compareLetters(event.key);
    tallyGuesses();
}




