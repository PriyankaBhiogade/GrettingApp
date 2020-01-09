let greetingService = require('../Services/GreetingServices');

class GreetingController {
    welcomeMessage(req, res) {
        let requestData = {
            firstName: req.params.firstName,
            lastName: req.params.lastName
        }
        let result = greetingService.getMessage(requestData);
        res.send(result);
    }
}
module.exports = new GreetingController();