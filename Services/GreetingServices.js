const model = require('../Model/GreetingModel');

class GreetingServices {
    createMessage(req) {
        let filterData = {
            'name': req.firstName,
            'message': `${(req.firstName == undefined && req.lastName == undefined) ?
                "Hello World" : `Welcome ${(req.firstName == undefined) ? "" : req.firstName} ${(req.lastName == undefined) ? "" : req.lastName} to Greeting App!`}`
        }
        let result = model.create(filterData);
        return result;
    }

    getAllMessage() {
        let id = {};
        return model.read(id).then(result => {
            return result;
        }).catch((error) => {
            return (error);
        })
    }

    findGreetingMessageById(req) {
        let id = {
            _id: req.id
        }
        return model.read(id).then(result => {
            return result;
        }).catch((error) => {
            return (error);
        })
    }

    editMessage(req) {
        return model.update(req).then(result => {
            return result;
        }).catch((error) => {
            return (error);
        })
    }

    deleteMessage(req) {
        return model.delete(req).then(result => {
            return result;
        }).catch((error) => {
            return (error);
        })
    }
}

module.exports = new GreetingServices();