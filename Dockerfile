FROM arm32v7/node

RUN git clone git://git.drogon.net/wiringPi
RUN cd wiringPi && ./build

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .

EXPOSE 12000
CMD [ "npm", "start" ]
