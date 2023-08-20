# Using a Container Volume for Logging

### Build the Image
To build the image run the following command from the `LoggingToAVolume` folder:

`docker build -t logging-to-a-volume .`

### Run the Container

To run the container run with a custom volume location:

`docker run -d -p 3000:3000 -v "$(pwd)/logs":/var/www/logs logging-to-a-volume`

Visit http://localhost:3000 and refresh the page a few times. Then open the `logs/access.log` file and you should see the log entries.

