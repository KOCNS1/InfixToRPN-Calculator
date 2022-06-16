FROM node:16.15-alpine

WORKDIR /app

COPY ./package.json /app
COPY . .

RUN npm install

# EXPOSE 3000

CMD ["npm", "run", "dev"]
