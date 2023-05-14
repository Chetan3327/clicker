const button = document.getElementById("click")
const score = document.getElementById("score")
window.onload = function(){
    update()
}

function update(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
        document.getElementById("score").innerText = localStorage.clickcount;
    }
    document.getElementById("score").innerText = localStorage.clickcount;
}

