var express = require('express');
var router = express.Router();
var todosCtlr = require('../controllers/todos');

router.get('/', todosCtlr.index);
router.get('/', todosCtlr.create);
router.delete('/:id', todosCtlr.delete);



module.exports = router;