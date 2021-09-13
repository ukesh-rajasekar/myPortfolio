FROM node
WORKDIR /app
COPY package.json .
RUN yarn install
RUN npm install @material-ui/core
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]