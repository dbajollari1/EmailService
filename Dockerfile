FROM node:14-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

ENV NODE_ENV="production"
ENV PORT=3001
ENV MJ_APIKEY_PUBLIC='077fc21857d31f1f416fbf1ab7477164'
ENV MJ_APIKEY_PRIVATE='03caddedf8edb44156d03585242e359a'
ENV MJ_EMAIL='arianb1@hotmail.com'



EXPOSE 8080
CMD [ "node", "./dist/index.js" ]