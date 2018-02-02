const express = require('express');

const config = require('config');

const app = express();

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort + '...'));

module.exports = app;
