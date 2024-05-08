let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;


let changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

let checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            music.pause();
            gameover.play();

        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    element.addEventListener("click", () => {
        let boxtext = element.querySelector(".boxtext");
        music.play();
        if (boxtext.innerText === "")
            boxtext.innerText = turn;
        turn = changeTurn();
        audioturn.play();
        checkWin();
        if (!isgameover) {
            document.querySelector(".info").innerText = "Turn for"+"  " + turn;
        }
    })
})


reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    music.pause();

})
