let scoreHomeEl = document.getElementById('scoreHome')
let scoreGuestEl = document.getElementById('scoreGuest')
let scoreHome = 0
let scoreGuest = 0
scoreHomeEl.textContent = scoreHome
scoreGuestEl.textContent = scoreGuest

function add1Home(){
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function add2Home(){
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function add3Home(){
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function add1Guest(){
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function add2Guest(){
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}
function add3Guest(){
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}