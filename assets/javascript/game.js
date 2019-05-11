//Global Variables

var words = ["wannabe" , "what is love", "macarena", "i like to move it", "mambo no five", "wonderwall", "i will always love you", "no diggity", "all star", "ice ice baby", "under the bridge", "bitter sweet symphony"];
var currentWord = "";
var currentWordLetter = [];
var blank = 0;
var match = [];
var incorrectGuess = [];

var wins = 0;
var remainingGuess = 0;


    //listen the key event
document.onkeyup = function(event) {
    var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    letterCheck(guessedLetter);
    console.log(guessedLetter);
}
    //~~~~FUNCTIONS~~~~ 
function game() {
    // Creating random selection
    currentWord = words[Math.floor(Math.random() * words.length)]; 
    console.log(currentWord);
    // Display underscore to hide the current word 
    currentWordLetter = currentWord.split (""); 
    console.log(currentWordLetter);
    blank = currentWordLetter.length;
    console.log(blank);


