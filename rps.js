/*
PSEUDOCODE FOR FIRST STEP:
1. Make function called getComputerChoice that radomly returns 'Rock', 'Paper' or 'Scissors'
2. Need to make an array with the 3 possibilities: rock, paper, scissors
3. Need to use Math.random to generate a random option from array
4. Need to use .length function to go through the whole length our our gameOptions array
5. Need to use Math.floor function to round our options that math.random will give us
*/

/*
PSEUDOCODE FOR SECOND STEP:
1. Make function that plays a single round of Rock Paper Scissors
2. Function takes 2 parameters - playerSelection and computerSelection
3. Return string that declares winner of the round: "You Lose! Paper beats Rock"
4. Make your function’s playerSelection parameter case-insensitive so users can input rock, ROCK, RocK or any other variations
5. Return the results of this function call, not console.log() them.

How to make case-insensitive? (come back to this later)
convert input to either all lower or uppercase
The toUpperCase() method converts a string to uppercase letters.
let text = "Hello World!";
let result = text.toUpperCase();
*/

/*
PSEUDOCODE FOR THIRD STEP:
1. ✔ Write a NEW function called game()
2. Call playRound function INSIDE of this one
3. game() function will play a 5 round game that keeps score
4. Report a winner or loser at the end
5. Use console.log to display the results of each round and winner at the end
6. ✔ Use prompt() to get input from the user
*/

let gameOptions = ['Rock', 'Paper', 'Scissors'];
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

const playerSelection = prompt("Choose Your Weapon (Rock, Paper, Scissors):");
const computerSelection = getComputerChoice();

console.log("First to 5 Wins!")
console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerScore,"|" + " Computer: " + computerScore);


//console.log(game());
