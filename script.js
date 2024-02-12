function getComputerChoice() {                                                          //Function provides a number as choice for the computer
    return Math.floor(Math.random() * 3) + 1;                                           //Generates a random number between 1 and 3
}

let countComputer = 0
let countPlayer = 0
let result = ""

function playRound(playerSelection, computerSelection){                                 //Function compares playerSelection and computerSelection and decides if it is a draw or if someone wins
    
    if (playerSelection == computerSelection){                                          //If both numbers are equal "Its a draw!" is printed and the count variables are not incremented
                                          
        let result = `It's a draw! ${countPlayer}:${countComputer}`
        return result

    }else if (playerSelection == 1 && computerSelection == 2) {                         //Every following "else if" compares choices:
                                                                                
        countComputer++                                                                 //increment the counter of the winner                                                                                         
        let result = `You lose! Paper beats rock! ${countPlayer}:${countComputer}`      //prints the to the user who has won and the overall count
        return result                                                       

    }else if (playerSelection == 1 && computerSelection == 3) {

        countPlayer++
        let result = `You win! Rock beats scissors! ${countPlayer}:${countComputer}`
        return result 

    }else if (playerSelection == 2 && computerSelection == 1) {

        countPlayer++
        let result = `You win! Paper beats rock! ${countPlayer}:${countComputer}`
        return result 

    }else if (playerSelection == 2 && computerSelection == 3) {

        countComputer++
        let result = `You lose! Scissors beats paper! ${countPlayer}:${countComputer}`
        return result 

    }else if (playerSelection == 3 && computerSelection == 1) {

        countComputer++
        let result = `You lose! Rock beats scissors! ${countPlayer}:${countComputer}`
        return result 
        

    }else if (playerSelection == 3 && computerSelection == 2) {

        countPlayer++
        let result = `You win! Scissors beats paper! ${countPlayer}:${countComputer}`
        return result 
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound(1, getComputerChoice));
paper.addEventListener("click", () => playRound(2, getComputerChoice));
scissors.addEventListener("click", () => playRound(3, getComputerChoice));
