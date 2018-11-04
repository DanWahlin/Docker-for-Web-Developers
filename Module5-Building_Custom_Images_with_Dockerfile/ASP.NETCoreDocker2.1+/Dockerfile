FROM        microsoft/dotnet:2.1-sdk

LABEL       author="Dan Wahlin"

ENV         ASPNETCORE_URLS=http://*:5000
ENV         DOTNET_USE_POLLING_FILE_WATCHER=1
ENV         ASPNETCORE_ENVIRONMENT=development

WORKDIR     /app

ENTRYPOINT ["/bin/bash", "-c","dotnet restore && dotnet watch run"]

# Build the image using:
# docker build -t [your_image_name] .

# Run the image using:
# docker run -p 8080:5000 -v $(pwd):/app danwahlin/aspnetcoredemos

# If you'd like to run in detached mode add -d to the docker run command