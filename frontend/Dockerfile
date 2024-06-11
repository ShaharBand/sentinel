FROM node:22.2.0-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm i

COPY . ./

EXPOSE 5173

CMD [ "npm", "run", "dev"]