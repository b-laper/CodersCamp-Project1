const P1 = "kolko"
const P2 = "krzyzyk"

let turn = 0;
let round = true;

const boxes = document.querySelectorAll("div.box");
const btn = document.querySelector("button.reset");
const h2 = document.querySelector("h2.header")

choose = (e) => {
    round = !round;
    turn++;
    if (round === true) {
        e.target.style.backgroundImage = "url(img/kolko.png)"
        h2.textContent = "Tura gracza pierwszego (Krzyżyk)"
    } else {
        e.target.style.backgroundImage = "url(img/krzyzyk.png)"
        h2.textContent = "Tura gracza drugiego (Kółko)"
    }
    console.log(e.target);
    if (turn === 9) {
        h2.textContent = "Koniec gry"
    }
}

resetGame = () => {
    turn = 0;
    round = true;
    h2.textContent = "Rozpocznij grę od Gracza pierwszego (Krzyżyk)"
    boxes.forEach(box => {
        box.style.backgroundColor = " #999"
        box.style.backgroundImage = "none";
        box.addEventListener("click", choose, {
            once: true
        });
    })
}

boxes.forEach(box => {
    box.addEventListener("click", choose, {
        once: true
    });
})
btn.addEventListener('click', resetGame);