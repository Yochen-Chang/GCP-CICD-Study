FROM node:8-alpine

WORKDIR ~

COPY package.json .
RUN npm i

COPY src ./src

CMD [ "npm", "start" ]i
