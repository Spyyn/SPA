var express = require('express');
var path = require('path');
// var routes = require('./src/routes/routes');

process.on('uncaughtException', function (error) {
  console.error(Object.keys(error));
});

var app = express();

// Log 
app.use(function (req, res, next) {
  log = {
    time: new Date,
    params: req.params,
    body: req.body,
    url: req.url,
    reporter: 'Spyyn api'
  };
  console.log(log);
  next();
});

// Static pages
app.use(express.static(path.join(__dirname, '../public')));

// Error
app.use(function (error, req, res, next) {
  if (error) console.error(error);
  res.status(500).send('big time error!')
});

// Server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("The Spyyn SPA is now running at localhost:" + port);
});

