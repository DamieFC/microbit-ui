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
serial.writeLine("Do you SEE this???")
basic.pause(2000)
serial.writeLine("Micro:bit booted!")
basic.forever(function () {
	
})
