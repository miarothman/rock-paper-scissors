let gameOptions = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let randomChoice = Math.random();
   let totalGameOptions = gameOptions.length;
   let randomIndex = Math.floor(randomChoice * totalGameOptions);
   let randomGameOption = gameOptions[randomIndex];
   return randomGameOption;
}

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection){
    return "It's a tie!";
} else if (playerSelection === gameOptions[0] && computerSelection === gameOptions[1]){
    computerScore++;
   return "You Lose! Paper beats Rock!";
} else if (playerSelection === gameOptions[0] && computerSelection === gameOptions[2]){
    playerScore++;
    return "You Win! Rock beats Scissors!";
} else if (playerSelection === gameOptions[1] && computerSelection === gameOptions[0]){
    playerScore++;
    return "You Win! Paper beats Rock!";
} else if (playerSelection === gameOptions[1] && computerSelection === gameOptions[2]){
    computerScore++;
    return "You Lose! Scissors beats Paper!";
} else if (playerSelection === gameOptions[2] && computerSelection === gameOptions[0]){
    computerScore++;
    return "You Lose! Rock beats Scissors!";
} else if (playerSelection === gameOptions[2] && computerSelection === gameOptions[1]){
    playerScore++;
    return "You Win! Scissors beats Paper";
}
}

let playerSelection = prompt("Choose Your Weapon").toLowerCase();
let computerSelection = getComputerChoice();

console.log("First to 5 Wins!")
console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerScore,"|" + " Computer: " + computerScore);


//console.log(game());
