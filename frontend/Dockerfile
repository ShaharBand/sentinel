# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:22.2.0-alpine as build-stage

WORKDIR /frontend

COPY package*.json ./

ARG INSTALL_DEV=false
RUN if [ "$INSTALL_DEV" = "true" ]; then npm ci; else npm ci --only=production; fi

# Stage 1, make Ngnix here
COPY . ./

EXPOSE 5173

CMD [ "npm", "run", "dev"]