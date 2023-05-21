if(localStorage.clickcount === undefined && localStorage.autoInc === undefined){
    localStorage.clickcount = 1;
    localStorage.autoInc = 0;   
}
document.getElementById("score").innerText = localStorage.clickcount;


function update(){
    document.getElementById("score").innerText = localStorage.clickcount;
    document.getElementById("inc").innerText = "Auto Inc: " + localStorage.autoInc;
    localStorage.clickcount = Number(localStorage.clickcount) + Number(localStorage.autoInc)
}
function c(){
    localStorage.clickcount = Number(localStorage.clickcount) + 1
    console.log("object");
}




function Inc(cost, inc){
    if(Number(localStorage.clickcount) > Number(cost)){
        localStorage.clickcount = Number(localStorage.clickcount) - Number(cost)
        localStorage.autoInc = Number(localStorage.autoInc) + Number(inc)
    }
}

function reset(){
    localStorage.clickcount = 1;
    localStorage.autoInc = 0;
}

setInterval(update, 1000)







