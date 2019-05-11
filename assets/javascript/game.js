//Global Variables

var words = ["wannabe" , "what is love", "macarena", "i like to move it", "mambo no five", "wonderwall", "i will always love you", "no diggity", "all star", "ice ice baby", "under the bridge", "bitter sweet symphony"];
var currentWord = "";
var currentWordLetter = [];
var blankNum = 0;
var match = [];
var incorrectGuess = [];

var wins = 0;
var remainingGuess = 0;

function game() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);

}


//display underscored current word  

//listen the key event

// letter check
// match
// change the underscore to letter
if ( userGuess === currentWord) {
    
}

//not change guess remaining


// if the last letter guessed correctly change the score +1


//reset the game


// not match

//show the guessed letter under the letters already gueesed section


//if guess remaining = 0 prompt  you lost


//display new game

};

