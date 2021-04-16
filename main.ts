input.onButtonPressed(Button.A, function () {
    radio.sendString("micro:bit OS")
    serial.writeLine("micro:bit OS")
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine("Hey I got something over radio! It's a strong!")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Hey I booted!")
    serial.writeLine("Hey I booted!")
})
basic.showLeds(`
    # # # . #
    # . # . #
    # . # . #
    # # # . #
    . . . . .
    `)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.No)
basic.showIcon(IconNames.Yes)
basic.showIcon(IconNames.Duck)
basic.showLeds(`
    # # # # #
    # . . . #
    # # . # #
    # . . . #
    # # # # #
    `)
turtle.pen(TurtlePenMode.Down)
turtle.forward(1)
turtle.back(2)
basic.clearScreen()
serial.redirectToUSB()
serial.writeLine("Do you SEE this???")
basic.pause(2000)
serial.writeLine("Micro:bit booted!")
basic.pause(2000)
serial.writeLine("" + control.deviceSerialNumber() + " is the micro:bit serial number")
basic.forever(function () {
	
})
