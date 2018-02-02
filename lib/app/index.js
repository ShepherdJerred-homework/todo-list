const bodyParser = require('body-parser');
const express = require('express');
const expressSession = require('express-session');
const morgan = require('morgan');

const config = require('config');

const app = express();

app.use(morgan('dev'));
app.use(expressSession({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort + '...'));

module.exports = app;
