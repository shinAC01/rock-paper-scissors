function getComputerChoise() {
    let options = ["Rock", "Paper", "Scissor"];
    let choise = random(0, 2);
    return options[choise];
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function playGame(playerSelection, computerSelection) {
    switch (playerSelection == "Rock") {
        case computerSelection == "Paper":
            alert("You lose! Paper beat Rock");
            break;
        case computerSelection == "Scissor":
            alert("You won! Rock beat Scissors");
        case computerSelection == "Rock":
            alert("Tie!");
    }

    switch (playerSelection == "Paper") {
        case computerSelection == "Paper":
            alert("Tie!");
            break;
        case computerSelection == "Scissor":
            alert("You lose! Scissors beat Paper");
        case computerSelection == "Rock":
            alert("You won! Paper beat Rock");
    }

    switch (playerSelection == "Scissor") {
        case computerSelection == "Paper":
            alert("You won! Scissor beat Paper");
            break;
        case computerSelection == "Rock":
            alert("You lose! Rock beat Scissors");
        case computerSelection == "Scissor":
            alert("Tie!");
    }
}

alert(playGame("Rock", getComputerChoise()));