const button = document.getElementById("click")
const score = document.getElementById("score")

// let clickcount = localStorage.clickcount
// let autoInc = localStorage.autoInc




window.onload = function(){
    update()
}

function update(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
        localStorage.autoInc = 0;
        document.getElementById("score").innerText = localStorage.clickcount;
    }
    document.getElementById("score").innerText = localStorage.clickcount;
}


function mainLoop(){
    document.getElementById("score").innerText = localStorage.clickcount;
    localStorage.clickcount = Number(localStorage.clickcount) + Number(localStorage.autoInc)
    // localStorage.clickcount = Number(localStorage.clickcount) + 1;
}

setInterval(mainLoop, 1000);

function autoInc(cost, inc){
    if(Number(localStorage.clickcount) >= cost){
        localStorage.autoInc = Number(localStorage.autoInc) + inc;
        localStorage.clickcount = Number(localStorage.clickcount) - cost;
    }
}






