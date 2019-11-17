let turnCounter = 0;
let playerTurn = true;
let playerCrossFields = [];
let playerCircleFields = [];
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
    opacity(0)
    if (playerTurn === true) playerWithCircleTurn(e);
    else playerWithCrossTurn(e);
    if (turnCounter === lastTurn) playerInfo.textContent = "Koniec gry";

}
const playerWithCrossTurn = (e) => {
    e.target.style.backgroundImage = "url(img/krzyzyk.png)";
    playerInfo.textContent = "Następny ruch: Tura gracza (Kółko)";
    playerCrossFields.push(optionSet);
    checkGame(playerCrossFields, "Wygrywa gracz (Krzyżyk)")
    if (playerInfo.textContent == "Wygrywa gracz (Krzyżyk)") removeBoxesEvents()
}

const playerWithCircleTurn = (e) => {
    e.target.style.backgroundImage = "url(img/kolko.png)";
    playerInfo.textContent = "Następny ruch: Tura gracza (Krzyżyk)";
    playerCircleFields.push(optionSet);
    checkGame(playerCircleFields, "Wygrywa gracz (Kółko)")
    if (playerInfo.textContent == "Wygrywa gracz (Kółko)") removeBoxesEvents()

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

const resetGame = () => {
    playerCrossFields = [];
    playerCircleFields = [];
    turnCounter = 0;
    playerTurn = true;
    playerInfo.style.color = "White"
    playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Krzyżyk)"
    opacity(1)
    boxes.forEach(box => {
        box.style.backgroundImage = "none";
        box.addEventListener("click", playerChoose, {
            once: true
        });
    })
}

const changePlayer = () => {
    if (turnCounter === 0) playerTurn = !playerTurn;
    if (playerTurn === false) playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Kółko)"
    else playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Krzyżyk)"
}
const opacity = (value) => {
    changePlayerButton.style.opacity = `${value}`
}

const removeBoxesEvents = () => {
    boxes.forEach(box => {
        box.removeEventListener("click", playerChoose, );
    })
}

boxes.forEach(box => {
    box.addEventListener("click", playerChoose, {
        once: true
    });
})

resetButton.addEventListener('click', resetGame);
changePlayerButton.addEventListener('click', changePlayer);