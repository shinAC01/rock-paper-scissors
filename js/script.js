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

    alert(playerSelection);

    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            alert("You lose! Paper beat Rock");
            return;
        }

        if (computerSelection == "Scissor") {
            alert("You won! Rock beat Scissors");
            return;
        }

        if (computerSelection == "Rock") {
            alert("Tie!");
        }

    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            alert("Tie!");
        }
        if (computerSelection == "Scissor") {
            alert("You lose! Scissors beat Paper");
            return;
        }
        if (computerSelection == "Rock") {
            alert("You won! Paper beat Rock");
            return;
        }
    }

    if (playerSelection == "Scissor") {
        if (computerSelection == "Paper") {
            alert("You won! Scissor beat Paper");
            return;
        }
        if (computerSelection == "Rock") {
            alert("You lose! Rock beat Scissors");
            return;
        }
        if (computerSelection == "Scissor") {
            alert("Tie!");
        }
    }
}

playGame(getPlayerSelection(), getComputerChoise());