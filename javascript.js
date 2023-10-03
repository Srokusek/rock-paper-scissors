function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            return 1
        }
        if (computerChoice == "scissors") {
            return 0
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return 1
        }
        if (computerChoice == "paper") {
            return 0
        }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            return 1
        }
        if (computerChoice == "rock") {
            return 0
        }
    }
    if (playerChoice == computerChoice) {
        return 2
    }
} 


function game() {
    let playerScore = 0, computerScore = 0;
    for (i = 0; i<5; i++) {
        let playerChoice = prompt("rock paper or scissors?").toLowerCase()
        let computerChoice = getComputerChoice()
        if (playRound(playerChoice,computerChoice) == 1) {
            computerScore++
            console.log("You lost! " + computerChoice + " beats " + playerChoice)
            console.log("the score is " + playerScore + "-" + computerScore)
        }
        if (playRound(playerChoice,computerChoice) == 0) {
            playerScore++
            console.log("You won! " + playerChoice+ " beats " + computerChoice)
            console.log("the score is " + playerScore + "-" + computerScore)
        } 
        if (playRound(playerChoice,computerChoice) == 2) {
            console.log("Tie!, The score is still " + playerScore + "-" + computerScore)
        } 
    }
    if (playerScore>computerScore) {
        console.log("You won the game with score" + playerScore + "-" + computerScore)
    }
    if (playerScore<computerScore) {
        console.log("You lost the game with score" + playerScore + "-" + computerScore)
    }
    if (playerScore==computerScore) {
        console.log("You tied the game with score" + playerScore + "-" + computerScore)
    }
}
game()
