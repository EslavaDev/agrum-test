const { Router } = require('express');
const controller = require('./events.controller');


const router = new Router();
router.post('/', controller.created);
router.get('/:id?', controller.getAllFirs);


module.exports = router;