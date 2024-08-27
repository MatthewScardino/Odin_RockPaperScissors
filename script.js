

function getComputerChoice(){
    let ComputerChoice = Math.floor(Math.random() * 3);

    if (ComputerChoice === 0){
        return "rock";
    }
    else if (ComputerChoice === 1){
        return "paper";
    }
    else if (ComputerChoice === 2){
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    const HumanChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
/*    if (HumanChoice.toLowerCase() != 'rock' || 'paper' || 'scissors' ) {
        alert("Invalid input.");
    }
*/
    return HumanChoice;
}

function playGame(){
    
    //Holds the scores!
    let humanScore = 0;
    let computerScore = 0;

    // Function for playing a single round
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        console.log(`Computer choice = ${computerChoice}`);
        console.log(`Your choice = ${humanChoice}`);

        if(humanChoice === computerChoice) {
            return console.log("Draw!! Play Again.");
        }
        
        else if( (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
            console.log('Congratulations! You won this round! ' + humanChoice + ' beats '+ computerChoice + '!');
            humanScore += 1;
        } 
        
        else {
            console.log('Oops! You lose this round. ' + computerChoice + ' beats ' + humanChoice + '!');
            computerScore += 1;
        }
    }

    // Lets play for 5 rounds
    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if(humanScore === computerScore) {
        alert('Tie game! \n Your Score: ' + humanScore + '\n Computer Score: ' + computerScore);
    } 
    
    else if (humanScore > computerScore) {
        alert('Congratulations! You Win! \nYour Score: ' + humanScore + '\nComputer Score: ' + computerScore);
    } 
    
    else {
        alert('You lose! Better luck next time \n Your Score: ' + humanScore + '\nComputer Score: ' + computerScore);
    }

    playRound(humanSelection, computerSelection);
}

playGame()