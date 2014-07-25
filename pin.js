var raspi = require("raspi-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  var pin, state;

  pin = new five.Pin(7); // GPIO4

  this.loop(500, function() {
    pin.write( state ^= 0x01 );
  });
});
