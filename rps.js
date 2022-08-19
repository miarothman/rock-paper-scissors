/*
PSEUDOCODE FOR FIRST STEP:
1. Make function called getComputerChoice that radomly returns 'Rock', 'Paper' or 'Scissors'
2. Need to make an array with the 3 possibilities: rock, paper, scissors
3. Need to use Math.random to generate a random option from array
4. Need to use .length function to go through the whole length our our gameOptions array
5. Need to use Math.floor function to round our options that math.random will give us
*/

let gameOptions = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
   let randomChoice = Math.random();
   let totalGameOptions = gameOptions.length;
   let randomIndex = Math.floor(randomChoice * totalGameOptions);
   let randomGameOption = gameOptions[randomIndex];
   return randomGameOption;
}

/*
PSEUDOCODE FOR SECOND STEP:
1. Make function that plays a single round of Rock Paper Scissors
2. Function takes 2 parameters - playerSelection and computerSelection
3. Return string that declares winner of the round: "You Lose! Paper beats Rock"
4. Make your function’s playerSelection parameter case-insensitive so users can input rock, ROCK, RocK or any other variations
5. Return the results of this function call, not console.log() them.

How to make case-insensitive?
convert input to either all lower or uppercase
The toUpperCase() method converts a string to uppercase letters.
let text = "Hello World!";
let result = text.toUpperCase();
*/

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection){
    return "It's a tie!";
} else if (playerSelection === gameOptions[0] && computerSelection === gameOptions[1]){
   return "You Lose! Paper beats Rock!";
} else if (playerSelection === gameOptions[0] && computerSelection === gameOptions[2]){
    return "You Win! Rock beats Scissors!";
} else if (playerSelection === gameOptions[1] && computerSelection === gameOptions[0]){
    return "You Win! Paper beats Rock!";
} else if (playerSelection === gameOptions[1] && computerSelection === gameOptions[2]){
    return "You Lose! Scissors beats Paper!";
} else if (playerSelection === gameOptions[2] && computerSelection === gameOptions[0]){
    return "You Lose! Rock beats Scissors!";
} else if (playerSelection === gameOptions[2] && computerSelection === gameOptions[1]){
    return "You Win! Scissors beats Paper";
}
}
const playerSelection = gameOptions[0];
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


