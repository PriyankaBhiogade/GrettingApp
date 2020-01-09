var express = require('express');
var router = express.Router();
let greetingController = require('../Controller/GreetingController')

router.get('/welcome/:firstName/:lastName', greetingController.welcomeMessage);
router.post('/welcome', greetingController.welcomeMessage);
router.put('/welcome', greetingController.welcomeMessage);
router.delete('/welcome', greetingController.welcomeMessage);


module.exports = router;
