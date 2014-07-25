var raspi = require('raspi-llio');

var pwm = new raspi.PWM();
raspi.PWM.setMode(0);
raspi.PWM.setClockDivisor(400);
raspi.PWM.setRange(1000);

var value = 40;
setInterval(function() {
  if (value == 40) {
    value = 90;
  } else {
    value = 40;
  }
  pwm.write(value);
}, 500);
