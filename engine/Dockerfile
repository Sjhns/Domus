FROM node:18.16-alpine

WORKDIR /engine

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "run", "test" ]