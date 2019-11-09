let turnCounter = 0;
let lastTurn = 9;
let playerTurn = true;
let resultPlayer1 = [];
let resultPlayer2 = [];
let optionSet;

const boxes = document.querySelectorAll("div.box");
const resetButton = document.querySelector("button.reset");
const playerInfo = document.querySelector("h2.header");
const changePlayerButton = document.querySelector("button.change-player");

const playerChoose = (e) => {
    optionSet = e.target.dataset.option;
    playerTurn = !playerTurn;
    turnCounter++;
    changePlayerButton.style.opacity = "0";
    if (playerTurn === true) playerWithCircle(e);
    else playerWithCross(e);
    console.log(e.target.dataset.option);
    console.log(resultPlayer1);
    console.log(resultPlayer2);
    checkGame()
    if (turnCounter === lastTurn) {
        checkGame();
        playerInfo.textContent = "Koniec gry";
    }
}

const playerWithCross = (e) => {
    e.target.style.backgroundImage = "url(img/krzyzyk.png)";
    playerInfo.textContent = "Następny ruch: Tura gracza (Kółko)";
    resultPlayer1.push(optionSet);
}

const playerWithCircle = (e) => {
    e.target.style.backgroundImage = "url(img/kolko.png)";
    playerInfo.textContent = "Następny ruch: Tura gracza (Krzyżyk)";
    resultPlayer2.push(optionSet);
}

const checkGame = () => { // Sprawdzenie gracza (Krzyżyk)
    // Pola poziome
    if ((resultPlayer1.includes("1") == true) && (resultPlayer1.includes("2") == true) && (resultPlayer1.includes("3") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } else if ((resultPlayer1.includes("4") == true) && (resultPlayer1.includes("5") == true) && (resultPlayer1.includes("6") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } else if ((resultPlayer1.includes("7") == true) && (resultPlayer1.includes("8") == true) && (resultPlayer1.includes("9") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } // Pola pionowe
    else if ((resultPlayer1.includes("1") == true) && (resultPlayer1.includes("4") == true) && (resultPlayer1.includes("7") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } else if ((resultPlayer1.includes("2") == true) && (resultPlayer1.includes("5") == true) && (resultPlayer1.includes("8") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } else if ((resultPlayer1.includes("3") == true) && (resultPlayer1.includes("6") == true) && (resultPlayer1.includes("9") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } // Pola ukośne
    else if ((resultPlayer1.includes("1") == true) && (resultPlayer1.includes("5") == true) && (resultPlayer1.includes("9") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    } else if ((resultPlayer1.includes("3") == true) && (resultPlayer1.includes("5") == true) && (resultPlayer1.includes("7") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Krzyżyk)";
    }
    // Sprawdzenie gracza (Kółko)
    // Pola poziome
    if ((resultPlayer2.includes("1") == true) && (resultPlayer2.includes("2") == true) && (resultPlayer2.includes("3") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } else if ((resultPlayer2.includes("4") == true) && (resultPlayer2.includes("5") == true) && (resultPlayer2.includes("6") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } else if ((resultPlayer2.includes("7") == true) && (resultPlayer2.includes("8") == true) && (resultPlayer2.includes("9") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } // Pola pionowe
    else if ((resultPlayer2.includes("1") == true) && (resultPlayer2.includes("4") == true) && (resultPlayer2.includes("7") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } else if ((resultPlayer2.includes("2") == true) && (resultPlayer2.includes("5") == true) && (resultPlayer2.includes("8") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } else if ((resultPlayer2.includes("3") == true) && (resultPlayer2.includes("6") == true) && (resultPlayer2.includes("9") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } // Pola ukośne
    else if ((resultPlayer2.includes("1") == true) && (resultPlayer2.includes("5") == true) && (resultPlayer2.includes("9") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    } else if ((resultPlayer2.includes("3") == true) && (resultPlayer2.includes("5") == true) && (resultPlayer2.includes("7") == true)) {
        playerInfo.textContent = "Wygrywa gracz (Kółko)";
    }
}
boxes.forEach(box => {
    box.addEventListener("click", playerChoose, {
        once: true
    });
})

const resetGame = () => {
    resultPlayer1 = [];
    resultPlayer2 = [];
    turnCounter = 0;
    playerTurn = true;
    playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Krzyżyk)"
    changePlayerButton.style.opacity = "1";
    boxes.forEach(box => {
        box.style.backgroundColor = " #999"
        box.style.backgroundImage = "none";
        box.addEventListener("click", playerChoose, {
            once: true
        });
    })
}

const changePlayer = () => {
    if (turnCounter === 0) {
        playerTurn = false;
        playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Kółko)"
        changePlayerButton.style.opacity = "0";
    }
}

resetButton.addEventListener('click', resetGame);
changePlayerButton.addEventListener('click', changePlayer);