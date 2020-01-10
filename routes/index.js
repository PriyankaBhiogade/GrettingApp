let express = require('express');
let router = express.Router();
let greetingController = require('../Controller/GreetingController')

router.get('/greeting/', greetingController.welcomeMessage);
router.post('/greeting/', greetingController.welcomeMessage);
router.put('/greeting/', greetingController.welcomeMessage);
router.delete('/greeting/', greetingController.welcomeMessage);


module.exports = router;
