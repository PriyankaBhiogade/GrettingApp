class GreetingServices {
    getMessage(req) {
        if (req.firstName == undefined && req.lastName == undefined)
            return `Hello World`
        else
            return `Hello ${(req.firstName == undefined) ? "" : req.firstName} ${(req.lastName == undefined) ? "" : req.lastName}`;
    }
}

module.exports = new GreetingServices();