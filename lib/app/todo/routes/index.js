const express = require('express');
const todoController = require('../controllers');

let router = express.Router();

router.get('/', todoController.getItems);

router.post('/add', todoController.addItem);

router.post('/save', todoController.saveItems);

router.post('/remove', todoController.deleteItems);

module.exports = router;
