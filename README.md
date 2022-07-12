# Tangilla Technical test

## Pre requirements
it is mandatory for the application to have Docker installed. It is possible to download it from this [a link](https://www.docker.com/products/docker-desktop/).

## Instructions for setup local environment

By default, the ports used by the application are the next ones:
- `DataBase: 3306`
- `BackEnd: 3001`
- `FrontEnd: 4200`

### Running on Windows
Run the following files in order:
- `winContainer`
- `winBackend`
- `winFrontend`

### Running on Linux

Run the followings commands in each terminal on the root file directory

Terminal 1:
- `cd backend/`
- `docker-compose up`

Terminal 2:
- `cd backend/`
- `npm i`
- `npm run start-dev`

Terminal 3:
- `cd frontend/`
- `npm i`
- `ng serve --open`
