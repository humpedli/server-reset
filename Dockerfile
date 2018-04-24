FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .

EXPOSE 12000
CMD [ "npm", "start" ]
