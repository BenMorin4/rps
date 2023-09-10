function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return [`Tie, ${playerSelection} vs. ${computerSelection}`, null];
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return [`You Lose, ${computerSelection} beats ${playerSelection}`, 0];
        }
        if (computerSelection == 'scissors') {
            return [`You Win, ${playerSelection} beats ${computerSelection}`, 1];
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return [`You Lose, ${computerSelection} beats ${playerSelection}`, 0];
        }
        if (computerSelection == 'paper') {
            return [`You Win, ${playerSelection} beats ${computerSelection}`, 1];
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return [`You Lose, ${computerSelection} beats ${playerSelection}`, 0]
        }
        if (computerSelection == 'paper') {
            return [`You Win, ${playerSelection} beats ${computerSelection}`, 1]
        }
    }
}

function scoreGame(myScore) {
    if (myScore == null) {
        return [0, 0];
    } else if (myScore == 1) {
        return [1, 0];
    } else {
        return [0, 1];
    }
}

function chooseWinner(scores) {
    if (scores[0] > scores[1]) {
        return `You win ${scores[0]} to ${scores[1]}`;
    } else if (scores[0] < scores[1]) {
        return `You lose ${scores[1]} to ${scores[0]}`;
    } else {
        return `Tie ${scores[1]} to ${scores[0]}`;
    }
}

function game() {
    var text;
    var winner;
    var result;
    var score = [0, 0];
    var options = ['rock', 'paper', 'scissors'];

    for (i = 0; i < 5; i++) {
        var playerSelection = prompt('rock, paper, or scissors').trim().toLowerCase();
        while (!(options.includes(playerSelection))) {
            playerSelection = prompt('rock, paper, or scissors').trim().toLowerCase();
        }

        const computerSelection = getComputerChoice();
    
        var [text, winner] = playRound(playerSelection, computerSelection);
        
        console.log(text);

        result = scoreGame(winner);
        score[0] += result[0];
        score[1] += result[1];      
    }  

    console.log(chooseWinner(score));
}

game();