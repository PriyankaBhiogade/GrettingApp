class GreetingController{
    welcomeMessage(req,res){
        res.send("Welcome To Greeting App");
    }
}
module.exports = new GreetingController();