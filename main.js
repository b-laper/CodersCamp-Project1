let turnCounter = 0;
let playerTurn = true;
let resultPlayer1 = [];
let resultPlayer2 = [];
let optionSet;

const boxes = document.querySelectorAll("div.box");
const resetButton = document.querySelector("button.reset");
const playerInfo = document.querySelector("h2.header");
const changePlayerButton = document.querySelector("button.change-player");
const lastTurn = 9;

const playerChoose = (e) => {
    optionSet = e.target.dataset.option;
    playerTurn = !playerTurn;
    turnCounter++;
    changePlayerButton.style.opacity = "0";
    if (playerTurn === true) playerWithCircle(e);
    else playerWithCross(e);
    if (turnCounter === lastTurn) {
        playerInfo.textContent = "Koniec gry";
    }
}
const playerWithCross = (e) => {
    e.target.style.backgroundImage = "url(img/krzyzyk.png)";
    playerInfo.textContent = "Następny ruch: Tura gracza (Kółko)";
    resultPlayer1.push(optionSet);
    checkGame(resultPlayer1, "Wygrywa gracz (Krzyżyk)")
    if (playerInfo.textContent == "Wygrywa gracz (Krzyżyk)") {
        boxes.forEach(box => {
            box.removeEventListener("click", playerChoose, );
        })
    }
}

const playerWithCircle = (e) => {
    e.target.style.backgroundImage = "url(img/kolko.png)";
    playerInfo.textContent = "Następny ruch: Tura gracza (Krzyżyk)";
    resultPlayer2.push(optionSet);
    checkGame(resultPlayer2, "Wygrywa gracz (Kółko)")
    if (playerInfo.textContent == "Wygrywa gracz (Kółko)") {
        boxes.forEach(box => {
            box.removeEventListener("click", playerChoose, );
        })
    }
}

const checkGame = (player, text) => {
    // for (i = 0; i < 3; i++) {
    //     for (j = 1; j <= 3; j++) {
    //         player.every((item, index) => {
    //             return item[index] == (j + (3 * i))
    //         })
    //     }
    // }
    // for (i = 0; i < 3; i++) {
    //     for (j = 1; j <= 9; j += 3) {
    //         player.every((item, index) => {
    //             return item[index] == (j + i)
    //         })
    //     }
    // }


    // Pola poziome
    if ((player.includes("1") == true) && (player.includes("2") == true) && (player.includes("3") == true)) {
        playerInfo.textContent = text
        playerInfo.style.color = "Red"
        alert(text)
    } else if ((player.includes("4") == true) && (player.includes("5") == true) && (player.includes("6") == true)) {
        playerInfo.textContent = text
        playerInfo.style.color = "Red"
        alert(text)
    } else if ((player.includes("7") == true) && (player.includes("8") == true) && (player.includes("9") == true)) {
        playerInfo.textContent = text;
        playerInfo.style.color = "Red";
        alert(text)
    } // Pola pionowe
    else if ((player.includes("1") == true) && (player.includes("4") == true) && (player.includes("7") == true)) {
        playerInfo.textContent = text;
        playerInfo.style.color = "Red";
        alert(text)
    } else if ((player.includes("2") == true) && (player.includes("5") == true) && (player.includes("8") == true)) {
        playerInfo.textContent = text;
        playerInfo.style.color = "Red";
        alert(text)
    } else if ((player.includes("3") == true) && (player.includes("6") == true) && (player.includes("9") == true)) {
        playerInfo.textContent = text;
        playerInfo.style.color = "Red";
        alert(text)
    } // Pola ukośne
    else if ((player.includes("1") == true) && (player.includes("5") == true) && (player.includes("9") == true)) {
        playerInfo.textContent = text
        playerInfo.style.color = "Red"
        alert(text)
    } else if ((player.includes("3") == true) && (player.includes("5") == true) && (player.includes("7") == true)) {
        playerInfo.textContent = text;
        playerInfo.style.color = "Red"
        alert(text)
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
    playerInfo.style.color = "White"
    playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Krzyżyk)"
    changePlayerButton.style.opacity = "1";
    boxes.forEach(box => {
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