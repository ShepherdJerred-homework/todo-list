const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.render('todo');
});

router.post('/add', (req, res) => {

});

router.post('/save', (req, res) => {

});

router.post('/remove', (req, res) => {

});

module.exports = router;
