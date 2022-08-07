input.onButtonPressed(Button.A, function () {
    modules.led1.setBrightness(65)
    modules.led1.setAll(0x00ff00)
})
input.onButtonPressed(Button.B, function () {
    modules.led1.setBrightness(28)
    modules.led1.setAll(0x65471f)
})
modules.led1.setAll(0x000000)
modules.led1.setBrightness(0)
basic.pause(222)
