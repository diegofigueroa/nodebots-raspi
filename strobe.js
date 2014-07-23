var raspi = require('raspi-io');
var five  = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Create an Led on pin 7 (GPIO4)
  var led = new five.Led(7);
  
  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
}); 
