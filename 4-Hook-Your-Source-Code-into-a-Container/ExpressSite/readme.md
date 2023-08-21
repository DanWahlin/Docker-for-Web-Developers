# Using Volumes with Node.js

This demonstrates how a volume can be used to mount a local directory into a Node.js container.

`docker run -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node:alpine npm start`

NOTE: The `$(pwd)` command is for Linux, Mac, and WSL on Windows. If you are using PowerShell on Windows, you will need to use `${PWD}` instead. You'll need to add quotes around `"$(pwd)"` if you have a space character in the working directory path.