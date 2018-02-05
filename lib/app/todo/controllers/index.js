function getItems (req, res) {
  if (!req.session.items) {
    req.session.items = [];
  }
  res.render('todo', {
    items: req.session.items
  });
}

function addItem (req, res) {
  if (!req.session.items) {
    req.session.items = [];
  }
  let items = req.session.items;
  let item = req.body.item;
  items.push({ name: item });
  res.redirect(303, req.baseUrl + '/');
}

function saveItems (req, res) {
  if (!req.session.items) {
    req.session.items = [];
  }
  for (let i = 0; i < req.session.items.length; i++) {
    if (req.body['item' + i]) {
      req.session.items[i].done = (req.body['item' + i] === 'done');
    } else {
      req.session.items[i].done = false;
    }
  }
  res.redirect(303, req.baseUrl + '/');
}

function deleteItems (req, res) {
  if (!req.session.items) {
    req.session.items = [];
  }
  for (let key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      if (key.startsWith('item')) {
        let num = key.replace('item', '');
        num = parseInt(num, 10);
        if (req.body[key] === 'done') {
          req.session.items.splice(num, 1);
        }
      }
    }
  }
  res.redirect(303, req.baseUrl + '/');
}

module.exports = {
  getItems,
  addItem,
  saveItems,
  deleteItems
};
