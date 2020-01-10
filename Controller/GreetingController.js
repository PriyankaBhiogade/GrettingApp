let greetingService = require('../Services/GreetingServices');

class GreetingController {
    welcomeMessage(req, res) {
        let requestData = {
            firstName: req.query.firstName,
            lastName: req.query.lastName
        }
        let result = greetingService.getMessage(requestData);
        res.send(result);
    }
}

module.exports = new GreetingController();