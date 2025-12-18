//crate var for player input
//


//crate function getComputerChoice
//function genert random number 1-3
//save the number in var choice 
//crate if stetment number is 1 take rock
//else if 2 take paper
//else scissors





let humanScore = 0 ;
let computerScore = 0 ;
 

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

let getHumanChoice = prompt("Rock,Paper,Scissors").trim().toLowerCase();
console.log("Your Choice: " + getHumanChoice);

if (getHumanChoice ==="rock" || getHumanChoice ==="paper" || getHumanChoice ==="scissors"){
    console.log("Valid choice!");
} else {
    console.log("Invalid choice! Please enter rock, paper, or scissors.");
}


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1; 

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {  
        return "Scissors";
    }
}

let ComputerChoice = getComputerChoice()
console.log("Computer Choice: " + ComputerChoice);


function playerRound(getHumanChoice, ComputerChoice){
    const player = getHumanChoice.toLowerCase().trim();
    const Computer = ComputerChoice.toLowerCase().trim();
}

if (player === Computer) {
    console.log(`It's a tie! Both chose ${capitalize(player)}`);
    } else if (
        (player === "rock" && Computer === "scissors") ||
        (player === "paper" && Computer === "rock") ||
        (player === "scissors" && Computer === "paper")
    ) {
        console.log(`You win! ${capitalize(player)} beat ${capitalize(Computer)}`);
    } else {
        console.log(`You loss ${capitalize(Computer)} beat ${capitalize(player)}`)
    }