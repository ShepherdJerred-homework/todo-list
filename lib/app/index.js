const express = require('express');
const expressHandlebars = require('express-handlebars');

const config = require('./config');
const server = require('./server');

const app = express();

app.engine('hbs', expressHandlebars({defaultLayout: null}));
app.set('view engine', 'hbs');

app.use('/', server);

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort + '...'));

module.exports = app;
