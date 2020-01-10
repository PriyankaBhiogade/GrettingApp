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

    getAllMessage(req, res) {
        greetingService.getAllMessage().then(result => {
            res.status(200).send(result);
        }).catch((error) => {
            res.status(400).send(error)
        })
    }

    findGreetingMessageById(req, res) {
        let requestData = {
            id: req.params.id
        }
        greetingService.findGreetingMessageById(requestData).then(result => {
            res.status(200).send(result);
        }).catch((error) => {
            res.status(400).send(error)
        })
    }

    editMessage(req,res) {
        let requestData = {
            id:req.params.id,
            message: req.body.message
        }
        greetingService.editMessage(requestData).then(result => {
            res.status(200).send(result);
        }).catch((error) => {
            res.status(400).send(error)
        })
    }
    deleteMessage(req,res){
        let requestData = {
            id:req.params.id,
            message: req.body.message
        }
        greetingService.deleteMessage(requestData).then(result => {
            res.status(200).send(result);
        }).catch((error) => {
            res.status(400).send(error)
        })
    }
}

module.exports = new GreetingController();