FROM node:16.17.0

ENV ENV_PORT=3000

EXPOSE 3000

WORKDIR /app

COPY /backend/package.json /package.json

RUN yarn

COPY /backend /.

CMD ["yarn", "dev"]

FROM node:16.17.0

ENV ENV_PORT=3001

EXPOSE 3001

WORKDIR /app_postgres

COPY /backend/package.json /package.json

RUN yarn

COPY /backend /.

CMD ["yarn", "dev-postgres"]