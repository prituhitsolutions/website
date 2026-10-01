FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/

RUN npm ci
RUN npm ci --prefix server
RUN npm ci --prefix client

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]
