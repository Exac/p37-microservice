FROM node:11.15.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080

RUN npm run compile

CMD [ "npm", "start" ]
