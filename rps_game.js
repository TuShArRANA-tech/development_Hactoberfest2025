let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;

  if (player === computer) {
    roundWinner = 'tie';
    return "It's a Tie!";
  }

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    roundWinner = 'player';
    return `You Win! ${capitalize(player)} beats ${capitalize(computer)}.`;
  }

  computerScore++;
  roundWinner = 'computer';
  return `You Lose! ${capitalize(computer)} beats ${capitalize(player)}.`;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  console.log("--- Welcome to Rock, Paper, Scissors! ---");

  for (let i = 0; i < 5; i++) {
    console.log(`\n--- Round ${i + 1} ---`);
    const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    if (playerSelection === null || !['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
        console.log("Invalid input. Skipping round.");
        continue;
    }
    
    const computerSelection = getComputerChoice();

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
  }

  console.log("\n--- Game Over ---");
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > playerScore) {
    console.log("The computer won the game. Better luck next time!");
  } else {
    console.log("The game is a tie!");
  }
}

// game();
