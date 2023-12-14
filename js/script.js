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
            return "You lose!";
        }

        if (computerSelection == "Scissor") {
            return "You won!";
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
            return "You lose!";
        }
        if (computerSelection == "Rock") {
            return "You won!";
        }
    }

    if (playerSelection == "Scissor") {
        if (computerSelection == "Paper") {
            return "You won!";
        }
        if (computerSelection == "Rock") {
            return "You lose!";
        }
        if (computerSelection == "Scissor") {
            return "Tie!";
        }
    }
}


function Game() {

    //contadores para almacenar las victorias y derrotas
    let playerCount = 0;
    let pcCount = 0;
    let result; //variable que almacena la funcion del juego.

    for (let i = 0; i < 5; i++) {
        alert("Round: " + (i + 1)); //marco la ronda actual del juego

        result = playGame(getPlayerSelection(), getComputerChoise());
        //Los 3 casos posibles, en el caso del tie, se repite la ronda sin resultado
        if (result === "You lose!") {
            alert(result);
            pcCount += 1;
        } else if (result === "You won!") {
            alert(result);
            playerCount += 1;
        } else {
            alert(result);
            i -= 1;
        }
    }

    if (playerCount > pcCount) {
        alert("You have won! Victories: " + playerCount + ", Defeats: " + playerCount);
    } else if (playerCount < pcCount) {
        alert("You have lose! Victories: " + playerCount + ", Defeats: " + playerCount);
    } else {
        alert("It's a tie!");
    }
}

Game();