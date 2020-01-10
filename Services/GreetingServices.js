const model = require('../Model/GreetingModel');

class GreetingServices {
    createMessage(req) {
        if (req.firstName == undefined && req.lastName == undefined) {
            let filterData = {
                'name': req.firstName,
                'message': `Hello World`
            }
            return model.create(filterData).then(result =>{
                return result;
            }).catch((error) => {
                return (error);
            })

        } else {
            let filterData = {
                'name': req.firstName,
                'message': `Hello ${(req.firstName == undefined) ? "" : req.firstName} ${(req.lastName == undefined) ? "" : req.lastName}`
            }
            let result = model.create(filterData);
            return result;
        }
    }
    getAllMessage(){
        return model.read().then(result =>{
            return result;
        }).catch((error) => {
            return (error);
        })
    }
    findGreetingMessageById(req){
        return model.read(req).then(result =>{
            return result;
        }).catch((error) => {
            return (error);
        })
    }
    editMessage(req){
        return model.update(req).then(result => {
            return result;
        }).catch((error) => {
            return (error);
        })
    }
    deleteMessage(req){
        return model.delete(req).then(result => {
            return result;
        }).catch((error) => {
            return (error);
        })
    }
}

module.exports = new GreetingServices();