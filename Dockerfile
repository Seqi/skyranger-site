FROM node:6.12.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --production

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]