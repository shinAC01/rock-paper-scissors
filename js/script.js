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
    let round = 1;
    let roundCount = document.querySelector('.round-content');
    let choise = 1
    let result; //variable que almacena la funcion del juego.

    while (choise > 0) {
        const roundS = SVGAnimatedInteger.toString(round);
        roundCount.textContent = roundCount.textContent + round; //variable para marcar la ronda actual del juego

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

        choise = Number.parseInt(prompt("If you want to continue, type 1, if not, type 0: "));
        round += 1;
    }

    /* Usamos 3 ifs para poder evaluar si el jugador gana o pierde */
    if (playerCount > pcCount) {
        alert("You have won! Victories: " + playerCount + ", Defeats: " + playerCount);
    } else if (playerCount < pcCount) {
        alert("You have lose! Victories: " + playerCount + ", Defeats: " + playerCount);
    } else {
        alert("It's a tie!");
    }
}

Game();