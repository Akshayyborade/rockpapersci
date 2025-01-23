let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function updateScores() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
    const winnerAnnouncement = document.getElementById("winner-announcement");
    if (playerScore === 5) {
        winnerAnnouncement.textContent = "Congratulations! You are the winner!";
        endGame();
    } else if (computerScore === 5) {
        winnerAnnouncement.textContent = "Game Over! The computer wins.";
        endGame();
    }
}

function endGame() {
    disableButtons();
    document.getElementById("play-again").style.display = "block"; // Show the "Play Again" button
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function enableButtons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById("round-result").textContent = "";
    document.getElementById("winner-announcement").textContent = "";
    document.getElementById("play-again").style.display = "none"; // Hide the "Play Again" button
    enableButtons();
}

function handleButtonClick(event) {
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    document.getElementById("round-result").textContent = `You chose ${playerSelection}, computer chose ${computerSelection}. ${roundResult}`;
    updateScores();
    checkWinner();
}

document.getElementById("rock").addEventListener("click", handleButtonClick);
document.getElementById("paper").addEventListener("click", handleButtonClick);
document.getElementById("scissors").addEventListener("click", handleButtonClick);
document.getElementById("restart").addEventListener("click", resetGame);