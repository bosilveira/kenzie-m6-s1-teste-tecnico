FROM node:16.17.0

WORKDIR /frontend

COPY package.json package.json

RUN yarn

COPY . .

EXPOSE 3000
