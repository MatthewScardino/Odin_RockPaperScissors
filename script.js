
function getComputerChoice(){
    let ComputerChoice = Math.floor(Math.random() * 3);

    if (ComputerChoice === 0){
        return "Rock";
    }
    if (ComputerChoice === 1){
        return "Paper";
    }
    if (ComputerChoice === 2){
        return "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    const HumanChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    return HumanChoice;
}

console.log(getHumanChoice());

