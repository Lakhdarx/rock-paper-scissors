let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)+1;
    if (x === 1) return('Rock');
    else if (x === 2) return('Paper');
    else return('Scissor');
}

function getHumanChoice() {
    let choice = prompt('Rock, paper or scissor?');
    return choice;
}
