let score1= document.getElementById("score1")
let score2= document.getElementById("score2")
let past= document.getElementById("pass")

let homeScore=0
let guestScore=0
function homeadd1(){
    homeScore++
    score1.textContent=homeScore
}
function homeadd2(){
    homeScore+=2
    score1.textContent=homeScore
}
function homeadd3(){
    homeScore+=3
    score1.textContent=homeScore
}
function guestadd1(){
    guestScore++
    score2.textContent=guestScore
}

function guestadd2(){
    guestScore+=2
    score2.textContent=guestScore
}
function guestadd3(){
    guestScore+=3
    score2.textContent=guestScore
}
function clearS(){
    past.textContent = past.textContent + homeScore + ":"+ guestScore+"  "
    guestScore=0
    homeScore=0
    score2.textContent=0
    score1.textContent=0
}