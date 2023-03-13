radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P12, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("Up")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("Down")
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        radio.sendString("LEDL")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("LEDR")
    } else {
        if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("F", pins.analogReadPin(AnalogPin.P2))
        } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("B", pins.analogReadPin(AnalogPin.P2))
        } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("L", pins.analogReadPin(AnalogPin.P1))
        } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("R", pins.analogReadPin(AnalogPin.P1))
        } else {
            radio.sendString("S")
        }
    }
})
