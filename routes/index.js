var express = require('express');
var router = express.Router();
let greetingController = require('../Controller/GreetingController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/welcome', greetingController.welcomeMessage)
router.post('/welcome', greetingController.welcomeMessage)
router.put('/welcome', greetingController.welcomeMessage)
router.delete('/welcome', greetingController.welcomeMessage)


module.exports = router;
