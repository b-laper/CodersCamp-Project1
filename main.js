let turnCounter = 0;
let lastTurn = 9
let playerTurn = true;
let resultPlayer1 = [];
let resultPlayer2 = [];
let optionSet;

const boxes = document.querySelectorAll("div.box");
const resetButton = document.querySelector("button.reset");
const playerInfo = document.querySelector("h2.header")

const choose = (e) => {
    optionSet = e.target.dataset.option;
    playerTurn = !playerTurn;
    turnCounter++;
    if (playerTurn === true) playerWithCircle(e);
    else playerWithCross(e);
    console.log(e.target.dataset.option)
    console.log(e.target);
    if (turnCounter === lastTurn) {
        playerInfo.textContent = "Koniec gry"
        // checkGame()
    }
}

const playerWithCross = (e) => {
    e.target.style.backgroundImage = "url(img/krzyzyk.png)"
    playerInfo.textContent = "Następny ruch: Tura gracza drugiego (Kółko)"
    resultPlayer1.push(optionSet)
}

const playerWithCircle = (e) => {
    e.target.style.backgroundImage = "url(img/kolko.png)"
    playerInfo.textContent = "Następny ruch: Tura gracza pierwszego (Krzyżyk)"
    resultPlayer2.push(optionSet)
}
//const checkGame() => {
//     if (123 456 789
// 147 258 369
// 159 357)
// }

boxes.forEach(box => {
    box.addEventListener("click", choose, {
        once: true
    });
})

const resetGame = () => {
    turnCounter = 0;
    playerTurn = true;
    playerInfo.textContent = "Rozpocznij grę od Gracza pierwszego (Krzyżyk)"
    boxes.forEach(box => {
        box.style.backgroundColor = " #999"
        box.style.backgroundImage = "none";
        box.addEventListener("click", choose, {
            once: true
        });
    })
}

resetButton.addEventListener('click', resetGame);