## To build the image run the following command from the LoggingToAVolume folder:
## docker build -t logging-to-a-volume .

## To run the container run:
## docker run -d -p 3000:3000 -v "$(pwd)/logs":/var/www/logs logging-to-a-volume

FROM node:alpine

LABEL author="Dan Wahlin"

ENV NODE_ENV=production 
ENV PORT=3000

WORKDIR   /var/www
COPY      . .

RUN       npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]