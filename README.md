# Spyyn single page app

### Installing
```sh
npm install
```

### Developing
```sh
webpack -w
nodemon server/server.js
```

### Building
```sh
webpack
```

### Running
```sh
npm start
```

#### Notes
* We're using jerrysu's [heroku buildpack webpack](https://github.com/jerrysu/heroku-buildpack-webpack) plugin to have heroku run the webpack build on deployment.
