// Definer en variabel kalt 'VerdiPåPin_0'
let VerdiPåPin_0 = 0
basic.showString("Startet")
basic.forever(function () {
    // selve FLOTØREN er koplet til 'pinne 0'
    VerdiPåPin_0 = pins.analogReadPin(AnalogPin.P1)
    if (1000 < VerdiPåPin_0) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
    basic.showString(" :")
    basic.showNumber(VerdiPåPin_0)
})
