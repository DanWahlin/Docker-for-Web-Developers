FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /app
COPY ./publish .
ENTRYPOINT ["dotnet", "ASP.NETCoreDemos.dll"]

#1. dotnet publish "./ASP.NETCoreDemos.csproj" -c Release -o ./publish   
#2. docker build -f prod.dockerfile -t aspnetcoredemos:1.0 .
#3. docker run -d -p 8080:80 aspnetcoredemos:1.0