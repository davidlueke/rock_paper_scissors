let countComputer = 0
let countPlayer = 0

function getComputerChoice() {                                                          //Function provides a number as choice for the computer
    return Math.floor(Math.random() * 3) + 1;                                           //Generates a random number between 1 and 3
}
function updateScore() {
    points.textContent = `${countPlayer}:${countComputer}`;
}

function playRound(playerSelection, computerSelection){                                 //Function compares playerSelection and computerSelection and decides if it is a draw or if someone wins
    
    if (playerSelection == computerSelection){                                          //If both numbers are equal "Its a draw!" is printed and the count variables are not incremented
        
        updateScore()

    }else if (playerSelection == 1 && computerSelection == 2) {                         //Every following "else if" compares choices:
                                                                                
        countComputer++                                                                 //increment the counter of the winner                                                                                         
        updateScore()                                   

    }else if (playerSelection == 1 && computerSelection == 3) {

        countPlayer++
        updateScore()

    }else if (playerSelection == 2 && computerSelection == 1) {

        countPlayer++
        updateScore()

    }else if (playerSelection == 2 && computerSelection == 3) {

        countComputer++
        updateScore() 

    }else if (playerSelection == 3 && computerSelection == 1) {

        countComputer++
        updateScore()

    }else if (playerSelection == 3 && computerSelection == 2) {

        countPlayer++
        updateScore()
    }
}


let points = document.createElement("p")
let score = document.querySelector("#score")

points.textContent = `${countPlayer}:${countComputer}`;

score.appendChild(points)

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound(1, getComputerChoice()));
paper.addEventListener("click", () => playRound(2, getComputerChoice()));
scissors.addEventListener("click", () => playRound(3, getComputerChoice()));
