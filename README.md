[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

# bootstrap
```sh
$ docker-compose up yarn
$ docker-compose up postgres
$ docker-compose exec postgres bash -c "cd /usr/db && sh ./setup.sh"
$ docker-compose up application
$ docker-compose up pgadmin

Go to -> localhost:3000/api (swagger)
Go to -> localhost:5050 (pgadmin) {
    host: postgres
    username: talentumtuum
    password: password
    db: quest
}
```

# test

```sh
yarn run test:unit
```

# Envs
APPLICATION_HTTP_PORT = $INTEGER
