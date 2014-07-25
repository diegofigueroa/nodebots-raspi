var raspi = require('raspi-io');
var five  = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Create a new `button` hardware instance (GPIO4).
  var button = new five.Button(7);

  button.on("hold", function() {
    console.log( "Button held" );
  });

  button.on("press", function() {
    console.log( "Button pressed" );
  });

  button.on("release", function() {
    console.log( "Button released" );
  });

});
