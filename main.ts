radio.setTransmitPower(7)
radio.setGroup(222)

let i = 0
let white = false

basic.forever(function () {
    if (i == 1) {
        radio.sendString("rot")
    } else if (i == 2) {
        radio.sendString("grün")
    } else if (i == 3) {
        radio.sendString("blau")
    } else {
        radio.sendString("aus")
        i = 0
    }

    //white
    if (white) {
        radio.sendString("rot")
        radio.sendString("grün")
        radio.sendString("blau")
    }
    
})

input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    i++
})

input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (white) {
        white = false
    } else {
        white = true
    }
    
})