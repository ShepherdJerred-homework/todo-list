const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.render('todo');
});

router.post('/add', (req, res) => {
  if (!req.session.items) {
    req.session.items = [];
  }
  let items = req.session.items;
  let item = req.body.item;
  items.push(item);
  res.redirect('/');
});

router.post('/save', (req, res) => {
  if (!req.session.items) {
    req.session.items = [];
  }
  let items = req.session.items;
  for (let key in req.body) {
    if (Object.hasOwnProperty(key)) {
      if (req.body[key].startsWith('item')) {
        let num = req.body[key].replace('item', '');
        num = parseInt(num, 10);
        items[num].done = req.body[key] === 'done';
      }
    }
  }
  res.redirect('/');
});

router.post('/remove', (req, res) => {
  if (!req.session.items) {
    req.session.items = [];
  }
  for (let key in req.body) {
    if (Object.hasOwnProperty(key)) {
      if (req.body[key].startsWith('item')) {
        let num = req.body[key].replace('item', '');
        num = parseInt(num, 10);
        if (req.body[key] === 'done') {
          req.session.items.splice(num, 1);
        }
      }
    }
  }
});

module.exports = router;
