'use strict';

const express = require('express');
const gpio = require('rpi-gpio');
const gpiop = gpio.promise

// Constants
const PORT = 12000;
const HOST = '0.0.0.0';

// App
const app = express();

gpiop.setup(11, gpio.DIR_HIGH);

app.get('/', (req, res) => {
  gpio.write(11, false);
  setTimeout(() => {
    gpio.write(11, true);
  }, 300);
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
