


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





function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice,computerChoice) {
        // Make humanChoice case-insensitive    
            let humanLower = humanChoice.toLowerCase();
            let firstChar = humanChoice[0].toUpperCase();
            humanChoice = firstChar + humanLower.substr(1);
        
        // Logic of the game
            if (humanChoice === computerChoice) console.log('Tie!');
            else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissor' || humanChoice === 'Scissor' && computerChoice === 'Rock') {
                ++computerScore;
                console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
            }
            else {
                ++humanScore;
                console.log(`You win, ${humanChoice} beats ${computerChoice}`);
            }
        }
    
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore > computerScore) console.log('Congratulations, you won the game! :)');
    else if (computerScore > humanScore) console.log('Computer won the game :(');
    else console.log('tie');

    if (confirm('Do you want to replay?')) playGame();
    
}

playGame();