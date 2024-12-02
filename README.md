Project: Rock Paper Scissors
For this project, I created the game Rock Paper Scissors. This game will be played entirely in the console.
I wrote a function that randomly returns one of the following string values "rock", "paper" and "scissors". 

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors? (prompt will repeat if choice is not valid)");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let validChoices = ["rock", "paper", "scissors"];
    let computerChoice = getComputerChoice();
    let humanChoice = "default";
    do {
        humanChoice = getHumanChoice().toLowerCase();
    } while (!validChoices.includes(humanChoice));

    console.log("The computer chose " + computerChoice + " and you chose " + humanChoice);
    if (computerChoice == humanChoice) {
        console.log("It was a tie!");
        return;
    }

    if (computerChoice === "rock") {
        switch (humanChoice) {
            case "paper":
                console.log("paper beats rock, you win this round!");
                humanScore += 1;
                return;
            case "scissors": 
                console.log("rock beats scissors, you lose this round!");
                computerScore += 1;
                return;
            return;
        }
    }

    if (computerChoice == "paper") {
        switch (humanChoice) {
            case "scissors":
                console.log("scissors beats paper, you win this round!");
                humanScore += 1;
                return;
            case "rock": 
                console.log("paper beats rock, you lose this round!");
                computerScore += 1;
                return;
            return;
        }
    }

    if (computerChoice == "scissors") {
        switch (humanChoice) {
            case "rock":
                console.log("rock beats scissors, you win this round!");
                humanScore += 1;
                return;
            case "paper": 
                console.log("scissors beats rock, you lose this round!");
                computerScore += 1;
                return;
            return;
        }
    }
}

console.log("First to 5 wins!");
while (humanScore != 5 && computerScore != 5) {
    playRound();
    console.log("You have " + humanScore + " point(s) and the computer has " + computerScore + " point(s)");
}