FROM node:14.17.0-alpine3.11 as build

WORKDIR /build

COPY package.json yarn.lock ./
RUN rm -rf node_modules \
    && yarn install --frozen-lockfile

COPY . ./
RUN yarn build


FROM node:14.17.0-alpine3.11

ENV TINI_VERSION 0.18.0-r0

RUN apk add --no-cache tini=${TINI_VERSION}

WORKDIR /opt/pickyapp

COPY package.json yarn.lock ./
RUN rm -rf node_modules \
    && yarn install --prod --frozen-lockfile

COPY --from=build /build/static ./static
COPY --from=build /build/dist ./dist

EXPOSE 8080
VOLUME /srv/data

USER node
ENV NODE_ENV production
ENTRYPOINT ["/sbin/tini", "--", "node", "."]
