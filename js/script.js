function getPlayerSelection() {
    let selection = prompt("Input your Choise: Rock - Paper - Scissor");
    selection = selection.toLowerCase();
    let mayus = selection.charAt(0).toUpperCase();
    selection = mayus + selection.slice(1);
    return selection;
}

function getComputerChoise() {
    let options = ["Rock", "Paper", "Scissor"];
    let choise = random(0, 2);
    return options[choise];
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function playGame(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beat Rock";
        }

        if (computerSelection == "Scissor") {
            return "You won! Rock beat Scissors";
        }

        if (computerSelection == "Rock") {
            return "Tie!";
        }

    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            return "Tie!";
        }
        if (computerSelection == "Scissor") {
            return "You lose! Scissors beat Paper";
        }
        if (computerSelection == "Rock") {
            return "You won! Paper beat Rock";
        }
    }

    if (playerSelection == "Scissor") {
        if (computerSelection == "Paper") {
            return "You won! Scissor beat Paper";
        }
        if (computerSelection == "Rock") {
            return "You lose! Rock beat Scissors";
        }
        if (computerSelection == "Scissor") {
            return "Tie!";
        }
    }
}

let result = playGame(getPlayerSelection(), getComputerChoise());

if (result === "Tie!") {
    alert(result);
    result = playGame(getPlayerSelection(), getComputerChoise());
} else {
    alert(result);
}