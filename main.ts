input.onButtonPressed(Button.A, function () {
    modules.led1.setBrightness(65)
    modules.led1.setAll(0xff8000)
})
input.onButtonPressed(Button.B, function () {
    modules.led1.setBrightness(28)
    modules.led1.setAll(0x7f00ff)
})
modules.led1.setAll(0x000000)
modules.led1.setBrightness(65)
basic.pause(222)
basic.forever(function () {
	
})
