# Using Volumes with Node.js

docker run -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node npm start