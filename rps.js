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

console.log(getComputerChoice());