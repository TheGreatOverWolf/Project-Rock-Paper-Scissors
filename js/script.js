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

const Player = getHumanChoice.toLowerCase().trim();
const Computer = ComputerChoice.toLowerCase().trim();

function playerRound(getHumanChoice, ComputerChoice){
     if (!["rock", "paper", "scissors"].includes(Player)){
        console.log("Invalid human choice provided to playRound!");
        return;
    }

}

if (Player === Computer) {
    console.log(`It's a tie! Both chose ${capitalize(Player)}`);
    } else if (
        (Player === "rock" && Computer === "scissors") ||
        (Player === "paper" && Computer === "rock") ||
        (Player === "scissors" && Computer === "paper")
    ) {
        console.log(`You win! ${capitalize(Player)} beat ${capitalize(Computer)}`);
        humanScore++;
    } else {
        console.log(`You loss ${capitalize(Computer)} beat ${capitalize(Player)}`)
        computerScore++;
    }