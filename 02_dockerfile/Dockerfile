FROM node:14.17.0-alpine3.11 as build

WORKDIR /opt/pickyapp

COPY . ./
RUN yarn install && yarn build

EXPOSE 8080
VOLUME /srv/data

CMD yarn start
