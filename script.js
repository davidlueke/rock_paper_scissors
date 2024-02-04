function getComputerChoice() {                                                  //Function provides a number as choice for the computer
    return Math.floor(Math.random() * 3) + 1;                                   //Generates a random number between 1 and 3
}

function getPlayerChoice() {

    let choice = prompt("Make your choice! Rock, paper or scissors?")           //Player got to choose what to enter
    choice = choice.toLowerCase()                                               //Converts input of the player to lowercase to accept different writing style
    
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){      //Checks if the player input is a valid input
        console.log("No valid option")                                          //Let's the player know that the input is invalid
    }else if (choice == "rock"){                                                            
        return 1;
    }else if (choice == "paper"){
        return 2;
    }else if (choice == "scissors"){                                            //Each "else if" converts the player choice to a number to compare it with choice of the computer
        return 3;
    }
}

let countComputer = 0
let countPlayer = 0

function playRound(playerSelection, computerSelection){                         //Function compares playerSelection and computerSelection and decides if it is a draw or if someone wins
    
    if (playerSelection == computerSelection){                                  //If both numbers are equal "Its a draw!" is printed and the count variables are not incremented

        console.log("It's a draw!")
        console.log(`${countPlayer}:${countComputer}`)

    }else if (playerSelection == 1 && computerSelection == 2) {                 //Every following "else if" compares choices:
                                                                                
        countComputer++                                                         //increment the counter of the winner
        console.log("You lose! Paper beats rock!")                              //prints the to the user who has won 
        console.log(`${countPlayer}:${countComputer}`)                          //prints the overall count

    }else if (playerSelection == 1 && computerSelection == 3) {

        countPlayer++
        console.log("You win! Rock beats scissors!")
        console.log(`${countPlayer}:${countComputer}`)

    }else if (playerSelection == 2 && computerSelection == 1) {

        countPlayer++
        console.log("You win! Paper beats rock!")
        console.log(`${countPlayer}:${countComputer}`)

    }else if (playerSelection == 2 && computerSelection == 3) {

        countComputer++
        console.log("You lose! Scissors beats paper!")
        console.log(`${countPlayer}:${countComputer}`)

    }else if (playerSelection == 3 && computerSelection == 1) {

        countComputer++
        console.log("You lose! Rock beats scissors!")
        console.log(`${countPlayer}:${countComputer}`)

    }else if (playerSelection == 3 && computerSelection == 2) {

        countPlayer++
        console.log("You win! Scissors beats paper!")
        console.log(`${countPlayer}:${countComputer}`)
    }
}


for (let i = 0; i < 5; i++){                                                    //Loop calls the function playRound 5 times
    playRound(getPlayerChoice(), getComputerChoice())
}

if (countPlayer > countComputer){                                               //if statement compares the overall counter an decides who has won
    console.log(`With ${countPlayer}:${countComputer} you are the winner!`)     //Based on the comparison the corresponding message is printed
}else if (countPlayer < countComputer){
    console.log(`With ${countPlayer}:${countComputer} you have lost!`)
}else{
    console.log(`With ${countPlayer}:${countComputer} no one has won! It's a draw!`)
}