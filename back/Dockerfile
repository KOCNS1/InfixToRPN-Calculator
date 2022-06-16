FROM node:16.15-alpine

WORKDIR /back

COPY ./package.json /back
COPY . .

RUN npm install

# EXPOSE 3001

CMD ["npm", "run", "dev"]
