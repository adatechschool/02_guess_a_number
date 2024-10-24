
function askNumberToUser () {
    let givenNumber = prompt("Please enter a number"); 
    return givenNumber 
}

/* function didIWin (givenNumber) {
    if (givenNumber < 22) {
        alert("Bigger");
    } else if (givenNumber > 22) {
        alert("Smaller");
    } else if (givenNumber == 22) {
        alert("Hooray ! You guess it !");
    }
} */

    function didIwin (givenNumber) {
        if (givenNumber == 22) {
            return true;
        } else {
            return false;
        }
    }

function gamePlay() {
    let userEntry = askNumberToUser ();
    if (didIwin(userEntry)) {
        alert ("You Win !");
    } else {
        alert("Wrong! Choose another number!");
        gamePlay(); 
     }
    
}

gamePlay ()

