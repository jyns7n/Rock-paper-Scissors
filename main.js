function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock"
    } else if (computerChoice === 1) {
        computerChoice = "paper"
    } else if (computerChoice === 2) {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!!"
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scrissors") {
                    return "Rock beat Scrissors, You won!!"
                } else {
                    return "Rock is beaten by Paper, You Lost!!"
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    return "Paper beat Rock, You won!!"
                } else {
                    return "Paper is beaten by Scissors, You Lost!!"
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    return "Scissors beat Paper, You won!!"
                } else {
                    return "Scissors is beaten by Rock, You Lost!!"
                }
                break;
            default:
                break;
        }
    }
  }

const playerSelection = prompt("What's your Weapon?");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));