FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci
COPY swagger_output.json ./
COPY node_modules ./
COPY index.pug ./
COPY index.js ./
COPY app.js ./
COPY user.json ./
COPY VERSION ./

EXPOSE 8080
CMD ["node", "index.js"]