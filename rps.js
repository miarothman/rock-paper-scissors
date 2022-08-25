let gameOptions = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


function getComputerChoice() {
   let randomChoice = Math.random();
   let totalGameOptions = gameOptions.length;
   let randomIndex = Math.floor(randomChoice * totalGameOptions);
   let randomGameOption = gameOptions[randomIndex];
   return randomGameOption;
}

function playRound(playerSelection, computerSelection){
// tie options
if (playerSelection === computerSelection){
    return "It's a tie!";
// rock option
} else if (playerSelection === 'rock' && computerSelection === 'paper'){
    computerScore++;
   return "You Lose!\nPaper beats Rock";
} else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++;
    return "You Win!\nRock beats Scissors";
// paper option
} else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++;
    return "You Win!\nPaper beats Rock";
} else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    computerScore++;
    return "You Lose!\nScissors beats Paper";
// scissors option
} else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    computerScore++;
    return "You Lose!\nRock beats Scissors";
} else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++;
    return "You Win!\nScissors beats Paper";
} 
}


function getScore() {
if (playerScore === 5) {
document.getElementById("winner").innerText = "YOU WON! YAY!";
} else if (computerScore === 5){
document.getElementById("winner").innerText = "LOSER! COMPUTER WINS.";
}
}

function game() {
    computerSelection = getComputerChoice();
    document.getElementById("demo").innerText = playRound(playerSelection, computerSelection);
    document.getElementById("pscore").innerText = "Player: " + playerScore;
    document.getElementById("cscore").innerText = "Computer: " + computerScore;
}

const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', function() {
    playerSelection = 'rock';
    game();
    getScore();
});
const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', function() {
    playerSelection = 'paper';
    game();
    getScore();
});
const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', function() {
    playerSelection = 'scissors';
    game();
    getScore();
});

