FROM node:12-alpine

COPY package*.json ./
RUN yarn install
COPY ./ ./

CMD yarn run start