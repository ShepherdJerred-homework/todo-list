const bodyParser = require('body-parser');
const config = require('./config');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');
const todoRoutes = require('./todo/routes');

const app = express();

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

app.use(express.static(path.join(__dirname, '../../static')));

module.exports = app;
