const P1 = "kolko"
const P2 = "krzyzyk"

let round = true;

const boxes = document.querySelectorAll("div.box");
const btn = document.querySelector("button.reset");

choose = (e) => {
    round = !round;
    if (round === true) {
        e.target.style.backgroundImage = "url(img/kolko.png)"
    } else {
        e.target.style.backgroundImage = "url(img/krzyzyk.png)"
    }
    console.log(e.target);
    e.target.style.backgroundImage
}
resetGame = () => {
    round = true;
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