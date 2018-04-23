'use strict';

const express = require('express');
cost wpi = require('wiring-pi');

wpi.setup('wpi');

// Constants
const PORT = 12000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
  wpi.pinMode(4, wpi.OUTPUT);
  setTimeout(function() {
    wpi.digitalWrite(4, 1);
  }, 300);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
