# REST API YOUR TEAMS

Simple API to control your favorite teams

# Requirements/Dependencies

- docker
- docker-composer

## Install

    yarn

## .env

    cp .env.example .env

## Run the app

    yarn docker:up

## Down the app

    yarn docker:down

## API Request

## TEAMS

| Endpoint             | HTTP Method |     Description     |
| -------------------- | :---------: | :-----------------: |
| `/teams`             |   `POST`    |    `Create team`    |
| `/teams`             |    `GET`    |  `List all teams`   |
| `/teams/{{team_id}}` |    `GET`    |  `Find team by id`  |
| `/teams/{{team_id}}` |  `DELETE`   | `Delete team by id` |
