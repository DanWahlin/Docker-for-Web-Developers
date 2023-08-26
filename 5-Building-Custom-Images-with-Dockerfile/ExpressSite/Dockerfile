FROM node:alpine

LABEL author="Dan Wahlin"

ENV NODE_ENV=production 
ENV PORT=3000

WORKDIR /var/www
COPY ./package*.json .
RUN  npm install

COPY . .

VOLUME [ "/logs" ]

EXPOSE ${PORT}

ENTRYPOINT ["npm", "start"]

## To build the image run the following command from the LoggingToAVolume folder:
## docker build -t custom-node:1.0 .

## To run the container run:
## docker run -d -p 3000:3000 custom-node:1.0