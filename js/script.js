//crate var for player input
//crate function getComputerChoice
//function genert random number 1-3
//save the number in var choice 
//crate if stetment number is 1 take rock
//else if 2 take paper
//else scissors


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1; 
    if (choice === 1) {
        console.log("Rock";)
    } else if (choice === 2) {
        console.log("Paper");
    } else {  
        console.log("Scissors");
    }
    }