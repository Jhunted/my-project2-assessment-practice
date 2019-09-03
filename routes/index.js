var express = require('express');
var router = express.Router();
var todosCtlr = require('../controllers/todos');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', todosCtlr.index);

router.post('/', todosCtlr.create);

router.delete('/:id', todosCtlr.delete);


module.exports = router;
