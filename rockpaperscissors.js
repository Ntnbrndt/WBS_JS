/*
GET playerMove from command-line argument

IF playerMove is not rock, paper, or scissors
    DISPLAY error and exit

GENERATE computerMove randomly from rock, paper, scissors

IF playerMove == computerMove
    DISPLAY "Draw"
ELSE IF playerMove beats computerMove
    DISPLAY "You win!"
ELSE
    DISPLAY "You lose!"

DISPLAY moves and outcome
*/

function schnickschnackschnuck() {

    
    const playersMove = (process.argv[2] || "").toLowerCase();

    const validMoves = ["rock", "paper", "scissors"]
    const computersMove = validMoves[Math.floor(Math.random() * validMoves.length)]


    if (!validMoves.includes(playersMove)) {
        console.log("Input not valid. Put either rock, paper or scissors as third argument. Maybe just a typo?")
        return;
    }
    
    // actual Game, who's winning?
    if (computersMove === playersMove) {
        console.log(`It's a draw! You chose ${playersMove}, Computer also chose ${computersMove}`)
    }
    else if (
        playersMove === "rock" && computersMove === "scissors" || 
        playersMove === "paper" && computersMove === "rock" || 
        playersMove === "scissors" && computersMove === "paper" ) {
        console.log(`You win! You chose ${playersMove}, Computer chose ${computersMove}`)
    }
    else {
        console.log(`You lose. You chose ${playersMove}, Computer also chose ${computersMove}`)
    }
}

schnickschnackschnuck()