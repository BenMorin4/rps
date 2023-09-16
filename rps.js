const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const myScore = document.querySelector('#myScore');
const cpuScore = document.querySelector('#cpuScore');
const resultLog = document.querySelector('#resultLog');
const winText = document.querySelector('#winText');
var gameOver = false;

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

    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return [`You Lose, ${computerSelection} beats ${playerSelection}`, 0];
        }
        if (computerSelection == 'rock') {
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

var round = 1;
var score = [0, 0];
function processClick(text, winner) {

    var result;
    result = scoreGame(winner); 

    // Updates score
    score[0] += result[0];
    score[1] += result[1]; 

    // Updates DOM
    myScore.innerHTML = score[0];
    cpuScore.innerHTML = score[1];
    resultLog.innerHTML += `<br />${round}. ${text}`;
    round += 1;

    if (score[0] == 5) {
        winText.style.cssText = 'color: green';
        winText.innerHTML = 'You Win';
        gameOver = true;
    }
    else if (score[1] == 5) {
        winText.style.cssText = 'color: red';
        winText.innerHTML = 'You Lose';
        gameOver = true;
    }
}

function game() {
    var text;
    var winner;   
    
    rock.onclick = () => {
        if (gameOver) {
            return;
        }

        [text, winner] = playRound('rock', getComputerChoice());
        processClick(text, winner);
    }

    paper.onclick = () => {
        if (gameOver) {
            return;
        }

        [text, winner] = playRound('paper', getComputerChoice());
        processClick(text, winner);
    }

    scissors.onclick = () => {
        if (gameOver) {
            return;
        }

        [text, winner] = playRound('scissors', getComputerChoice());
        processClick(text, winner);
    }   
}

game();