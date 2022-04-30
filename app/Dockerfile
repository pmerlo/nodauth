FROM node:16.14.2

WORKDIR /var/app

COPY ./package*.json .
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["npm", "run", "prod"]
