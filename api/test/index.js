const { Router } = require('express');
const controller = require('./test.controller');


const router = new Router();

router.post('/', controller.saveUser);
router.get('/', controller.getAllFirs);


module.exports = router;