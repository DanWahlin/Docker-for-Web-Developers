# Using Volumes with Node.js

This demonstrates how a volume can be used to mount a local directory into a Node.js container.

**Linux, Mac, and WSL on Windows - $(pwd)**

`docker run -d -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node:alpine sh -c "npm install && npm start"`

**PowerShell - ${PWD}**

`docker run -d -p 8080:3000 -v ${PWD}:/var/www -w "/var/www" node:alpine sh -c "npm install && npm start"`

NOTE: You'll need to add quotes around `"$(pwd)"` or `"${PWD}"` if you have a space in the working directory path.