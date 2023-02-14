input.onButtonPressed(Button.A, function () {
    uña = 0
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(0 * (10 * 10))
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
})
input.onButtonPressed(Button.B, function () {
    barbara = 0
})
let barbara = 0
let uña = 0
radio.setGroup(1)
basic.forever(function () {
	
})
