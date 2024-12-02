function playGame() {
    let playAgain = true;

    while (playAgain) {
        // Prompt user for the number of rounds
        let rounds = parseInt(prompt("How many rounds would you like to play? (Enter a number)"), 10);
        while (isNaN(rounds) || rounds <= 0) {
            rounds = parseInt(prompt("Invalid input. Please enter a positive number for the rounds:"), 10);
        }

        // Initialize scores
        let humanScore = 0;
        let computerScore = 0;

        // Helper function to get the computer's choice
        function getComputerChoice() {
            const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
            if (randomNumber === 0) return "rock";
            if (randomNumber === 1) return "paper";
            return "scissors";
        }

        // Helper function to get the human's choice
        function getHumanChoice() {
            let userInput = prompt("Enter your choice: rock, paper, or scissors");
            userInput = userInput ? userInput.toLowerCase() : ""; // Handle potential null from prompt

            // Validate the input
            while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
                userInput = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
            }

            return userInput;
        }

        // Function to play a single round
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log(`It's a tie! Both chose ${humanChoice}`);
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")
            ) {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            } else {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }

            // Log scores
            console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
        }

        // Play the specified number of rounds
        for (let round = 1; round <= rounds; round++) {
            console.log(`Round ${round}`);
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }

        // Declare the overall winner
        if (humanScore > computerScore) {
            console.log("Congratulations! You are the overall winner!");
        } else if (humanScore < computerScore) {
            console.log("Sorry, the computer wins this time.");
        } else {
            console.log("It's a tie overall!");
        }

        // Ask if the user wants to play again
        const replayResponse = prompt("Do you want to play again? (yes/no)").toLowerCase();
        playAgain = replayResponse === "yes" || replayResponse === "y";
    }

    console.log("Thanks for playing! Goodbye!");
}

// Start the game
playGame();
