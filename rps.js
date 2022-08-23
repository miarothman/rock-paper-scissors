let gameOptions = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection = 'rock';
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
   return "You Lose! Paper beats Rock!";
} else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++;
    return "You Win! Rock beats Scissors!";
// paper option
} else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++;
    return "You Win! Paper beats Rock!";
} else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    computerScore++;
    return "You Lose! Scissors beats Paper!";
// scissors option
} else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    computerScore++;
    return "You Lose! Rock beats Scissors!";
} else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++;
    return "You Win! Scissors beats Paper";
}
}

function getScore() {
if (playerScore > computerScore) {
    return "YOU WIN!";
} else if (playerScore < computerScore){
    return "COMPUTER WINS!"
} else {
    return "IT'S A TIE! REMATCH!"
} 
}

function game() {
    //for(let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player: " + playerScore,"|" + " Computer: " + computerScore); 
}
//}

const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', function() {
    playerSelection = 'rock';
    game();
});
const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', function() {
    playerSelection = 'paper';
    game();
});
const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', function() {
    playerSelection = 'scissors';
    game();
});