//Global Variables

var words = ["wannabe" , "what is love", "macarena", "i like to move it", "mambo no five", "wonderwall", "i will always love you", "no diggity", "all star", "ice ice baby", "under the bridge", "bitter sweet symphony"];
var currentWord = "";
var currentWordLetter = [];
var blank = 0;
var match = [];
var incorrectGuess = [];

var wins = 0;
var remainingGuess = 0;

document.onkeyup = function(event) {
    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(guessedLetter);
}
