
/* function askNumberToUser () {
    let givenNumber = prompt("Please enter a number"); 
    return givenNumber; 
} */

/* function didIWin (givenNumber) {
    if (givenNumber < 22) {
        alert("Bigger");
    } else if (givenNumber > 22) {
        alert("Smaller");
    } else if (givenNumber == 22) {
        alert("Hooray ! You guess it !");
    }
} */

  /*   function didIwin (givenNumber) {
        if (givenNumber == 22) {
            return true;
        } else {
            return false;
        }
    } */

/* function gamePlay() {
    let userEntry = askNumberToUser ();
    if (didIwin(userEntry)) {
        alert ("You Win !");
    } else {
        alert("Wrong! Choose another number!");
        gamePlay(); 
     }
    
} */

/* gamePlay ()
 */

/* let givenNumber1;

function askNumberToGuessToUser1 () {
    let givenNumber = prompt("Please enter a number between 0 and 50"); 
    if (givenNumber >= 0 && givenNumber <=50) {
        givenNumber1 = givenNumber;
        return givenNumber;
    } else {
        alert("Your number must be superior to 0 and inferior to 50");
        return askNumberToGuessToUser1();
    }
}

function askNumberToUser2 () {
    let givenNumber2 = prompt("Guess a number between 0 and 50"); 
    return givenNumber2; 
}

function didIwin (givenNumber2) {
    if (givenNumber2 == givenNumber1) {
        return true;
    } else {
        return false;
    }
}

function gamePlay() {
    askNumberToGuessToUser1();
    let hasWon = false;

    while (!hasWon) {
        let userEntry = askNumberToUser2();
        if (didIwin(userEntry)) {
            alert ("You Win !");
            hasWon = true;
        } else {
            alert("Wrong! Choose another number!");
        }
    }
    
}

gamePlay(); */

/* let givenNumber1; 
let attempts = 0; 

function askNumberToGuessToUser1() {
    let givenNumber = prompt("Please enter a number between 0 and 50");
    if (givenNumber >= 0 && givenNumber <= 50) {
        givenNumber1 = parseInt(givenNumber);
    } else {
        alert("Your number must be between 0 and 50");
        askNumberToGuessToUser1();
    }
}

function didIwin(givenNumber2) {
    return givenNumber2 === givenNumber1;
}

function checkGuess() {
    const userInput = document.getElementById("user-input").value;
    const userGuess = parseInt (userInput);
    attempts++;
    document.getElementById("attempts").textContent = "Attempts: " + attempts;
    if (didIwin(userGuess)) {
        document.getElementById("game").innerHTML = "<h2>Congratulations! You guessed the mistery number !</h2>";
    } else if (userGuess < givenNumber1) {
        document.getElementById("message").textContent = "The number is bigger! Try again";
    } else {
        document.getElementById("message").textContent = "The number is smaller! Try again";
    }
}

function gamePlay() {
    askNumberToGuessToUser1(); 
    document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkGuess);
});
}

gamePlay(); */

let givenNumber1;
let attempts = 0;

function askNumberToGuessToUser1() {
  let givenNumber = prompt("Please enter a number between 0 and 50");
  if (givenNumber >= 0 && givenNumber <= 50) {
    givenNumber1 = parseInt(givenNumber);
  } else {
    alert("Your number must be between 0 and 50");
    askNumberToGuessToUser1();
  }
}

function didIwin(givenNumber2) {
  return givenNumber2 === givenNumber1;
}

function checkGuess() {
  const userInput = document.getElementById("user-input").value;
  const userGuess = parseInt(userInput);
  attempts++;
  document.getElementById("attempts").textContent = "Attempts: " + attempts;
  if (didIwin(userGuess)) {
    document.getElementById("game").innerHTML =
      "<h2>Congratulations! You guessed the mistery number !</h2>";
  } else if (userGuess < givenNumber1) {
    document.getElementById("message").textContent =
      "The number is bigger! Try again";
  } else {
    document.getElementById("message").textContent =
      "The number is smaller! Try again";
  }
}

function gamePlay() {
  askNumberToGuessToUser1();
  document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkGuess);
  });
}

gamePlay();




