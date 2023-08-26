# Using Volumes with ASP.NET Core

This demonstrates how a volume can be used to mount a local directory into an ASP.NET Core container.

**Linux, Mac, and WSL on Windows - $(pwd)**

`docker run -d -p 8080:5063 -v $(pwd):/var/www -w "/var/www" mcr.microsoft.com/dotnet/sdk bash -c "dotnet watch run"`

**PowerShell - ${PWD}**

`docker run -d -p 8080:5063 -v ${PWD}:/var/www -w "/var/www" mcr.microsoft.com/dotnet/sdk bash -c "dotnet watch run"`

NOTE: You'll need to add quotes around `"$(pwd)"` or `"${PWD}"` if you have a space in the working directory path.