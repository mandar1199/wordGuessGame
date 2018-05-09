//Computer picks random word to guess
function getItem() {
    //Possible words to guess
    var words = ["pencil", "chalkboard", "locker", "folder", "computer", "algebra"];
    document.getElementById("wordGuess").innerHTML = words[Math.floor(Math.random() * words.length)];
  
    //Displays possible words blank spaces
    var possibleWord = "P E N C I L";
    var blankSpaces = "_ _ _ _ _ _";
    var wordLength = possibleWord.length;
  
    for (i = 0; i < wordLength; i++) {
      var x = possibleWord.charAt(i);
  
      if (x === " " || x === "/'") {
        blankSpaces += x;
      } else {
        blankSpaces += "_";
      }
    }
    document.getElementById("blankSpaces").innerHTML = blankSpaces;
  }
  
  //This code captures the keypress and prints it out on the screen
  var guessesLeft = 12;
  
  document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
      charCode = keyPressed.keyCode || keyPressed.which,
      lettersGuessed = String.fromCharCode(charCode);
  
    // var userGuess = prompt("What word do you guess?");
    // var userGuess = words.split('');
    // var userGuess
    // if (words.indexOf(userGuess) > -1) {
    // 	alert("Your guess is correct.")
    // }else {
    // 	alert("Your guess is wrong.")
    // }
  
    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
  
    guessesLeft--;
  
    if (guessesLeft === -1) {
      alert("You Loose!");
    }
  }