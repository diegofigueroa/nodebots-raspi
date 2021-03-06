var raspi = require("raspi-io");
var five  = require("johnny-five");

var board = five.Board({
  io: raspi()
});

board.on("ready", function() {
  var led = new five.Led.RGB({
    pins: {
      red: 7,
      green: 11,
      blue: 15
    }
  });

  this.repl.inject({
    led: led,
  });

  led.strobe();
});
