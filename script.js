function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice: rock, paper, or scissors");
    userInput = userInput ? userInput.toLowerCase() : ""; // Handle potential null from prompt

    // Validate the input
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }

    return userInput;
}

// Test the function
console.log(getComputerChoice());
console.log(getHumanChoice());
