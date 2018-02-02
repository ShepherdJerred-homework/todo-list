const bodyParser = require('body-parser');
const express = require('express');
const expressSession = require('express-session');
const morgan = require('morgan');

const config = require('../config');

let router = express.Router();

router.use(morgan('dev'));
router.use(expressSession({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
router.use(bodyParser.urlencoded({extended: true}));
