FROM node:14

#ENV HTTP_PROXY http://suoja-proxy.vyv.fi:8080
#ENV HTTPS_PROXY https://suoja-proxy.vyv.fi:8080

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
#A wildcard is in the name to ensure that both package.json and package-lock.json are copied
COPY package*.json ./

RUN npm config set proxy http://suoja-proxy.vyv.fi:8080
#RUN echo "$http_proxy"

RUN npm install

# Bundling app source
COPY . .

EXPOSE 8080

#Start command to run the app inside the container
CMD [ "npm", "start" ]