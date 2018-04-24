FROM resin/raspberrypi3-alpine-node

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --unsafe
COPY . .

EXPOSE 12000
CMD [ "npm", "start" ]
