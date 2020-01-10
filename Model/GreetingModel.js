const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Schema = new schema({
        name: String,
        message: String
    },
    {
        timestamps: true
    });

const greetingModel = mongoose.model('greeting', Schema);

class GreetingModel {
    create(req) {
        let response = {
            success: true
        }
        return new Promise((resolve, reject) => {
            let user = new greetingModel({
                name: req.name || "unknown",
                message: req.message
            })
            user.save().then(message => {
                response.success,
                    response.message = message.message
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}

module.exports = new GreetingModel();