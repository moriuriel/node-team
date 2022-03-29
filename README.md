# Rest API Teams

Simple API to control your favorite teams

# Requirements/Dependencies

- docker
- docker-composer

## Install

    yarn

## .env

    cp .env.example .env

## ormconfig.json

    cp ormconfig.example.json ormconfig.json

## Run the app

    yarn docker:up

## Down the app

    yarn docker:down

## Run test

    yarn test

## Run test watch

    yarn test:watch

## Run coverage test

    yarn test:cov

## API Request

`TEAMS`

| Endpoint             | HTTP Method |     Description     |
| -------------------- | :---------: | :-----------------: |
| `/teams`             |   `POST`    |    `Create team`    |
| `/teams`             |    `GET`    |  `List all teams`   |
| `/teams/{{team_id}}` |    `GET`    |  `Find team by id`  |
| `/teams/{{team_id}}` |  `DELETE`   | `Delete team by id` |
