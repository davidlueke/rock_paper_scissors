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
