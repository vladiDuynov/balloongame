'use strict'

var gInterval
var gBalloons


function onInit() {
    gBalloons = [
        { id: 1, bottom: 1, speed: 11},
        { id: 2, bottom: 1, speed: 9},
        { id: 3, bottom: 1, speed: 10},
        { id: 4, bottom: 1, speed: 8},
        { id: 5, bottom: 1, speed: 7},
        { id: 6, bottom: 1, speed: 5},
        { id: 7, bottom: 1, speed: 6}
    ]
    renderBalloons()
}


function onStartGame() {
    // console.log('Start!')
    gInterval = setInterval(moveBalloons, 50)

}
function moveBalloons() {
    var elBalloons = document.querySelectorAll('.balloon')
    for (var i = 0; i < gBalloons.length; i++) {

        var balloon = gBalloons[i]

        var elBalloon = elBalloons[i]


        balloon.bottom += balloon.speed

        elBalloon.style.bottom = balloon.bottom + 'px'
    }
    if (balloon.bottom > 300) {
        clearInterval(gInterval)
        alert('You lost! the baloons made it to the top!')
    }
    

}




function onBalloonClicked(elBC) {

    var audioPop = new Audio('pop.wav')
    audioPop.play()
    elBC.style.opacity = '0'
    elBC.style.transition = 'opacity 300ms ease-in, visibility 0ms ease-in 300ms'
    elBC.style.pointerEvents = 'none'
    

}

function renderBalloons() {
    var strHTML = ''
    for (var i = 0; i < gBalloons.length; i++) {
        // console.log('i', i)
        strHTML +=
            `<div onclick="onBalloonClicked(this)" class="balloon balloon${i + 1}">
            </div>`
    }

    var elSky = document.querySelector('.sky')
    elSky.innerHTML = strHTML
}

