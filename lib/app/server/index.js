const bodyParser = require('body-parser');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');

const app = require('../');
const config = require('../config');
const todoRoutes = require('../todo/routes');

app.engine('hbs', expressHandlebars({defaultLayout: null}));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(expressSession({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todo/', todoRoutes);

app.use(express.static(path.join(__dirname, '../../../static')));

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort + '...'));
