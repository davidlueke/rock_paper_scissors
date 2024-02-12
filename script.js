function getComputerChoice() {                                                          //Function provides a number as choice for the computer
    return Math.floor(Math.random() * 3) + 1;                                           //Generates a random number between 1 and 3
}
function updateScore() {
    points.textContent = `${countPlayer} : ${countComputer}`;
}

function playRound(playerSelection, computerSelection){                                 //Function compares playerSelection and computerSelection and decides if it is a draw or if someone wins
    
    
    if (playerSelection == computerSelection){                                          //If both numbers are equal "Its a draw!" is printed and the count variables are not incremented
        
        updateScore()
        endGame()

    }else if ((playerSelection == 1 && computerSelection == 2) ||
            (playerSelection == 2 && computerSelection == 3) ||
            (playerSelection == 3 && computerSelection == 1)) {                         
                                                                                
        countComputer++                                                                                       
        updateScore()  
        endGame()                                 

    }else if ((playerSelection == 1 && computerSelection == 3) ||
            (playerSelection == 2 && computerSelection == 1) ||
            (playerSelection == 3 && computerSelection == 2)) {
        countPlayer++
        updateScore()
        endGame()
    }
}
function endGame(){
    if (countPlayer == 5 || countComputer == 5){

        if (countPlayer == 5){
            message.appendChild(playerWins);
            
        }else{
            message.appendChild(computerWins);
            
        }
        rock.removeEventListener("click", handleRock);
        paper.removeEventListener("click", handlePaper);
        scissors.removeEventListener("click", handleScissors);
    }
}


function handleRock(){
        playRound(1, getComputerChoice());
}

function handlePaper(){
    playRound(2, getComputerChoice());
}

function handleScissors(){
    playRound(3, getComputerChoice());
}

let countComputer = 0
let countPlayer = 0

let points = document.createElement("p");
points.textContent = `${countPlayer} : ${countComputer}`;
points.setAttribute("style", "color: #F9FAF8; font-size: 40px")
let score = document.querySelector("#score");
score.appendChild(points);

let message = document.querySelector("#message");
let playerWins = document.createElement("p");
playerWins.setAttribute("style", "color: #F9FAF8; font-size: 40px");
let computerWins = document.createElement("p");
computerWins.setAttribute("style", "color: #F9FAF8; font-size: 40px");

playerWins.textContent ="You win!";
computerWins.textContent ="You lose!";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", handleRock);
paper.addEventListener("click", handlePaper);
scissors.addEventListener("click", handleScissors);

