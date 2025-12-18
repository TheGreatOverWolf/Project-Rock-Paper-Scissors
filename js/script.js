//crate var for player input
//


//crate function getComputerChoice
//function genert random number 1-3
//save the number in var choice 
//crate if stetment number is 1 take rock
//else if 2 take paper
//else scissors



function playGame(){
let humanScore = 0 ;
let computerScore = 0 ;
 
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

for (let round = 1; round <= 5; round++){
    console.log(`\n---Round ${round}---`)

    let getHumanChoice;
    let valid = false;
    while(!valid){
    getHumanChoice = prompt("Rock,Paper,Scissors").trim().toLowerCase();
    if (getHumanChoice ==="rock" || getHumanChoice ==="paper" || getHumanChoice ==="scissors"){
    valid = true;
    console.log("Your Choice: " + getHumanChoice);
    } else {
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
}
}

if (getHumanChoice === getComputerChoice) {
    console.log(`It's a tie! Both chose ${capitalize(getHumanChoice)}`);
    } else if (
        (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper")
    ) {
        console.log(`You win! ${capitalize(getHumanChoice)} beats ${capitalize(getComputerChoice)}`);
        humanScore++;
    } else {
        console.log(`You lose ${capitalize(getComputerChoice)} beats ${capitalize(getHumanChoice)}`)
        computerScore++;
    }

    console.log("Computer Choice: " + capitalize(getComputerChoice));

    console.log(`Score - You: ${humanScore} Computer: ${getComputerChoice}`)
}
    console.log("\n=== GAME OVER ===");
    console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("🎉 YOU WIN THE GAME! 🎉");
    } else if (computerScore > humanScore){
        console.log("😢 Computer wins the game!")
    } else {
        console.log("🤝 It's a tie game!");
    }

    
}
playGame()