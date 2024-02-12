function getComputerChoice() {                                                          //Function provides a number as choice for the computer
    return Math.floor(Math.random() * 3) + 1;                                           //Generates a random number between 1 and 3
}

function getPlayerChoice() {

    let choice = prompt("Make your choice! Rock, paper or scissors?")                   //Player got to choose what to enter
    choice = choice.toLowerCase()                                                       //Converts input of the player to lowercase to accept different writing style
    
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){              //Checks if the player input is a valid input
        console.log("No valid option")                                                  //Let's the player know that the input is invalid
    }else if (choice == "rock"){                                                            
        return 1;
    }else if (choice == "paper"){
        return 2;
    }else if (choice == "scissors"){                                                    //Each "else if" converts the player choice to a number to compare it with choice of the computer
        return 3;
    }
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



if (countPlayer > countComputer){                                                       //if statement compares the overall counter an decides who has won
    console.log(`With ${countPlayer}:${countComputer} you are the winner!`)             //Based on the comparison the corresponding message is printed
}else if (countPlayer < countComputer){
    console.log(`With ${countPlayer}:${countComputer} you have lost!`)
}else{
    console.log(`With ${countPlayer}:${countComputer} no one has won! It's a draw!`)
}