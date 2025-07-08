const buttons = document.querySelector('.buttons');
const humanChoice = document.querySelector('.humanChoice');
const computerChoice = document.querySelector('.computerChoice');
const score = document.querySelector('.score');
const roundResult = document.querySelector('.roundResult');
const gameResult = document.querySelector('.gameResult');


let humanScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (e) => {
    let buttonClicked = e.target.id;
    let computerChoice = getComputerChoice();
    if (buttonClicked !== '') playRound(buttonClicked,computerChoice);
    
})


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)+1;
    if (x === 1) return('rock');
    else if (x === 2) return('paper');
    else return('scissor');
}

function playRound(human, computer) {

    if (humanScore === 0 && computerScore === 0) gameResult.textContent = '';

    if (human === computer) {
        humanChoice.textContent = `You chose ${human}`;
        computerChoice.textContent = `Computer chose ${computer}`;
        score.textContent = `Score: User: ${humanScore} - Computer: ${computerScore}`;
        roundResult.textContent = `Tie`;
    }
    else if (human === 'rock' && computer === 'paper' || human === 'paper' && computer === 'scissor' || human === 'scissor' && computer === 'rock') {
        humanChoice.textContent = `You chose ${human}`;
        computerChoice.textContent = `Computer chose ${computer}`;
        ++computerScore;
        score.textContent = `Score: User: ${humanScore} -  Computer: ${computerScore}`;
        roundResult.textContent = `Result of this round: Computer won!`;
    }
    else {
        humanChoice.textContent = `You chose ${human}`;
        computerChoice.textContent = `Computer chose ${computer}`;
        ++humanScore;
        score.textContent = `Score: User: ${humanScore} - Computer: ${computerScore}`;
        roundResult.textContent = `Result of this round: You won!`;
    }
    
    if (humanScore === 5) {
        gameResult.textContent = '---- You win! ----';
        gameResult.style.color = '#0FDD5B';
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        gameResult.textContent = '---- Computer wins! ----';
        gameResult.style.color = '#F10707';
        humanScore = 0;
        computerScore = 0;
    }
   


}







