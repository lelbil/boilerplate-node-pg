FROM node:latest

WORKDIR /usr/src/app
RUN apt-get update && apt-get install -f -y postgresql-client


COPY package*.json ./

RUN npm install

COPY . .
