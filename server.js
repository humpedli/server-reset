'use strict';

const express = require('express');
const gpio = require('rpi-gpio');
const path = require("path");

const PORT = 12000;
const HOST = '0.0.0.0';
const app = express();

console.log(`Initializing GPIO 11 port...`)
gpio.setup(11, gpio.DIR_HIGH);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/reset', (req, res) => {
	console.log(`Sending signal...`)
  	gpio.write(11, false);

  	setTimeout(() => {
    	gpio.write(11, true);
    	console.log(`Server reset signal sent!`)
  	}, 300);

  	res.redirect('/success');
});

app.get('/success', (req, res) => {
	res.sendFile(path.join(__dirname + '/success.html'));
});

app.get('/style.css', (req, res) => {
        res.sendFile(path.join(__dirname + '/style.css'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
