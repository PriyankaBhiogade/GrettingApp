let greetingService = require('../Services/GreetingServices');

class GreetingController {
    welcomeMessage(req, res) {
        let result = greetingService.getMessage();
        res.send(result);
    }
}

module.exports = new GreetingController();