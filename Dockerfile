FROM alpine:3.20

WORKDIR /app
COPY . .

RUN apk add --update nodejs npm
RUN npm install --global serve

RUN npm install
RUN npm run generate

CMD ["npx", "serve", "-s", "./.output/public"]