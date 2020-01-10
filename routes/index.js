let express = require('express');
let router = express.Router();
let greetingController = require('../Controller/GreetingController')

router.post('/greeting/', greetingController.createMessage);
router.get('/greeting', greetingController.getAllMessage);
router.get('/greeting/:id', greetingController.findGreetingMessageById);
router.put('/greeting/', greetingController.createMessage);
router.delete('/greeting/', greetingController.createMessage);


module.exports = router;
