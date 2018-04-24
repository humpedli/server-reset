# Server-reset

Reset a server with raspberry pi using GPIO ports

# Requirements
* Raspberry Pi (tested on RPI 3 Model B)
* Relay (connected to GPIO 11 - you can configure this in `server.js` file)
* Installed NodeJS (tested with Node 8)

# Install
* Clone to /home/pi/server-reset directory
* In /server-reset directory run `npm install --unsafe-perm`

# Run in background
* Install pm2 https://github.com/Unitech/pm2
* Add server.js to pm2: `pm2 start server.js`
* Enable pm2 on system startup: `pm2 startup`

# Use
* Open `http://<ip-address>:12000` in browser
* You can find and modify login credentials in `auth.js` file