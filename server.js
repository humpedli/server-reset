'use strict';

const express = require('express');
const gpio = require('rpi-gpio');

wpi.setup('wpi');

// Constants
const PORT = 12000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
  gpio.setup(4, gpio.DIR_OUT, () => { gpio.write(4, true) });
  setTimeout(() => {
    gpio.write(4, false);
  }, 300);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
