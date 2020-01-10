let greetingService = require('../Services/GreetingServices');

class GreetingController {
    createMessage(req, res) {
        let requestData = {
            firstName: req.query.firstName,
            lastName: req.query.lastName
        }
        greetingService.createMessage(requestData).then(result => {
            res.status(200).send(result);
        }).catch((error) => {
            res.status(400).send(error)
        })
    }
}

module.exports = new GreetingController();