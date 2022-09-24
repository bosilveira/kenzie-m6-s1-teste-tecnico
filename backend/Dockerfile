FROM node:16.17.0

WORKDIR /backend

COPY package.json package.json

RUN yarn

COPY . .

EXPOSE 3001
EXPOSE 3002