var words = ["wannabe" , "what is love", "macarena", "i like to move it", "mambo no five", "wonderwall", "i will always love you", "no diggity", "all star", "ice ice baby", "under the bridge", "bitter sweet symphony"];
var wins = 0;
var maxGuess = 13;
var currentWord = [];
var userGuess = [];
var match;
var remainingGuess;


document.onkeypress = function (event) {
    if (isAlphanumeric (event.key)) {
        checkLetter(event.key.toUpperCase() )
    }
};

