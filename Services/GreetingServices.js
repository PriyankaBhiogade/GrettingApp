class GreetingServices {
    getMessage(req) {
        return `Hello ${req.firstName} ${req.lastName}`;
    }
}

module.exports = new GreetingServices();