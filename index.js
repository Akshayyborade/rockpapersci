console.log("hello world");
let humanScore=0;
let computerScore=0;
function getComputerChoice() {
    let num = Math.random(); // Call Math.random() to get a random number between 0 and 1
    
    if (num < 0.33) {
        return "rock";
    } else if (num < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice  “rock”, “paper” or “scissors”. ");
    return choice;
}
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        
        return "You win!";

    } else {
       
        return "Computer wins!";
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  // Function to play 5 rounds
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    // Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        
        // Ensure player enters a valid option
        if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
            console.log("Invalid choice, please try again.");
            i--; // Repeat this round if the input is invalid
            continue;
        }

        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}: You chose: ${playerChoice}`);
        console.log(`Round ${i + 1}: Computer chose: ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        // Update scores based on the result
        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
    }

    // Display the final scores after 5 rounds
    console.log("Final Results:");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    // Determine and display the overall winner
    if (playerScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > playerScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Run the game
playGame();
  
