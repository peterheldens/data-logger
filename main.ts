// Press A to stream to makecode
input.onButtonPressed(Button.A, function () {
    log_to_data_streamer = false
    basic.pause(100)
    basic.clearScreen()
    basic.showString("M")
})
// Press B to stream to excel datastreamer
input.onButtonPressed(Button.B, function () {
    log_to_data_streamer = true
    basic.pause(100)
    basic.clearScreen()
    basic.showString("E")
})
radio.onReceivedValue(function (name, value) {
    if (log_to_data_streamer) {
        if (name == "eol") {
            serial.writeNumber(value)
            serial.writeLine("")
        } else {
            serial.writeNumber(value)
            serial.writeString(",")
            led.toggle(4, 2)
        }
    } else {
        serial.writeValue(name, value)
        led.toggle(2, 4)
    }
})
let log_to_data_streamer = false
basic.showString("M")
radio.setGroup(101)
radio.setTransmitPower(7)
log_to_data_streamer = false
