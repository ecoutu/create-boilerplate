FROM node:14 AS dev

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm && npm install

COPY . .

RUN npm run init

CMD npm run test
