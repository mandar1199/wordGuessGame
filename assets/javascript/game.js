//Possible words to guess
var words = ["P E N C I L", "C H A L K B O A R D", "L O C K E R", "F O L D E R", "C O M P U T E R", "A L G E B R A"];
var wordPicked = words[Math.floor((Math.random() * words.length))];
var wordLength = wordPicked.length
console.log(wordPicked);
document.getElementById("blankSpaces").innerHTML = wordPicked.length;


//Computer picks random word to guess
function getItem() {

    //Displays possible words blank spaces
    var blankSpaces;
    if(wordPicked === "P E N C I L ") {
        blankSpaces = "_ _ _ _ _ _";
    }
    else if(wordPicked === "C H A L K B O A R D") {
        blankSpaces = "_ _ _ _ _ _ _ _ _ _";
    }
    else if(wordPicked === "L O C K E R") {
        blankSpaces = "_ _ _ _ _ _";
    }
    else if(wordPicked === "F O L D E R") {
        blankSpaces = "_ _ _ _ _ _";
    }
    else if(wordPicked === "C O M P U T E R") {
        blankSpaces = "_ _ _ _ _ _ _ _";
    }
    else if(wordPicked === "A L G E B R A ") {
        blankSpaces = "_ _ _ _ _ _ _";
    }
    

    document.getElementById('blankSpaces').innerHTML = blankSpaces
}
  
  //This code captures the keypress and prints it out on the screen
  var guessesLeft = 15;

  getItem();
  
  document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
      charCode = keyPressed.keyCode || keyPressed.which,
      lettersGuessed = String.fromCharCode(charCode);
  
    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
  
    guessesLeft--;
  
    if (guessesLeft === -1) {
      alert("You Loose!");
    }
}