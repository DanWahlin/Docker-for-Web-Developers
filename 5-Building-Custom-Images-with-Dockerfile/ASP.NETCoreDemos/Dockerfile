ARG PORT=80

FROM mcr.microsoft.com/dotnet/aspnet AS base
WORKDIR /app
EXPOSE ${PORT}

FROM mcr.microsoft.com/dotnet/sdk AS build
WORKDIR /src
COPY ./ASP.NETCoreDemos.csproj .
RUN dotnet restore "./ASP.NETCoreDemos.csproj"
COPY . .
RUN dotnet build "./ASP.NETCoreDemos.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "./ASP.NETCoreDemos.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ASP.NETCoreDemos.dll"]

# 1. docker build -t aspnetcoredemos:2.0 --build-arg PORT=80 .
# 2. docker run -d -p 8080:80 aspnetcoredemos:2.0
