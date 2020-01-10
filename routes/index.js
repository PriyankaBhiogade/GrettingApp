let express = require('express');
let router = express.Router();
let greetingController = require('../Controller/GreetingController')

router.get('/greeting/', greetingController.createMessage);

router.post('/greeting/', greetingController.createMessage);
router.put('/greeting/', greetingController.createMessage);
router.delete('/greeting/', greetingController.createMessage);


module.exports = router;
