console.log(fiveGame());

// Play a five-round game of rock-paper-scissors
function fiveGame(){   
    introduceGame();
    // Set total points to 0 for user and computer
    let userPoints = 0;
    let computerPoints = 0;
    let winner;
    // Play one round of rock-paper-scissors
    // Check if computer or user reached 5 points
    while (userPoints < 5 && computerPoints < 5) {
        winner = playRound();
        if (winner === "computer") {
            computerPoints++;
        } else if (winner === "user") {
            userPoints++;
        } else if (winner === "tie") {
            // Do nothing
        } else {
            alert("Something went wrong with point calculations.");
        }
        // Output point totals
        alert(`User points: ${userPoints}
        Computer points: ${computerPoints}`)
    }
    // Declare winner
    if (userPoints > computerPoints) {
        alert(`Congrats, you escaped. Fuck you.`)
    } else if (computerPoints > userPoints) {
        alert(`Loser. Try again.`);
        fiveGame();
    }
}

function introduceGame(){
    // Start
    alert(`Welcome to hell.
    You will play rock, paper, scissors with my computer minion.
    If you reach 5 points before the computer does, then congratulations, you escape with your life.
    If the computer wins, then you will be trapped in an infinite rock-paper-scissors loop FOREVER!!!!!
    Muahahahahahahahah!!!!!!!`);
    // Output game rules  
    alert(`The rules are simple. 
    Rock beats scissors.
    Scissors beat paper.
    Paper beats rock.`);
    alert(`Good luck.
    
    You're going to need it.`);
}

// Get user's choice
function userPlay () {
    // declare userchoice variables
    let userChoice;
    // Prompt user for input rock/paper/scissors
    userChoice = prompt("Would you like to play rock, paper, or scissors?");
    // Make user variable lowercase
    userChoice = userChoice.toLowerCase();
    // Check if input is valid, return only a valid userChoice
        if (userChoice === "rock" || userChoice === "paper" || 
                userChoice === "scissors") {
            return userChoice;
        } else {
            alert("You did not enter a valid selection. Please try again, dumbass.");
        }
}

// Computer chooses rock/paper/scissors via RNG 
// (function computerPlay returns "rock", "paper", or "scissors")
function computerPlay () {
    // Declare computerChoice variable
    let computerChoice;
    // Generate random number between 1 and 3
        // Generate random number between 0 and 1
        let randNum = Math.random();
        // Multiply by 3, add one, change to interger
        randNum = Math.floor(randNum * 3 + 1);
    // Convert number to string "rock", "paper", or "scissors"
    if (randNum === 1) {
        computerChoice = "rock";
    } else if (randNum === 2) {
        computerChoice = "paper";
    } else if (randNum === 3) {
        computerChoice = "scissors";
    } else {
        computerChoice = "error";
    }
    // Return computerChoice
    return computerChoice;
}

// Play one round of Rock, Paper, Scissors
function playRound() {
    // Declare userSelection and computerSelection variables
    let userSelection, computerSelection;        
    // Call userPlay until user enters a valid selection
    while (!userSelection) {
        userSelection = userPlay();
    }
    // Call computerPlay to get computerSelection
    computerSelection = computerPlay();
    // Compare user choice and computer choice
    let winner;
    if (userSelection === computerSelection) {// Check for tie condition
        winner = "tie";
    // Check for user win
    } else if (userSelection === "rock" && computerSelection === "scissors" ||
            userSelection === "paper" && computerSelection === "rock" || 
            userSelection === "scissors" && computerSelection === "paper") {
        winner = "user"; 
        // Check for computer win
    } else if (userSelection === "paper" && computerSelection === "scissors" ||
            userSelection === "scissors" && computerSelection === "rock" ||
            userSelection === "rock" && computerSelection === "paper") {
        winner = "computer";
        // Else "something went wrong"
    } else {
        alert("Something went wrong")
        playRound();
    }
    // Output the results of the round
    if (winner === "tie") {
        alert(`Tie
        Luck is on your side. 
        The computer hasn't beaten you... yet.`)
    } else {
        alert(`You have chosen ${userSelection}. 
        The computer has chosen ${computerSelection}.
        The ${winner} wins this round.`)
    }
    // Return hand winner
    return winner;
}