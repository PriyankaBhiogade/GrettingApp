const mongoose = require('mongoose');
const dbConfig = require('./dbConfig');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then(() => {
    console.log(`Successfully connected to the Database.....`);
}).catch((err) => {
    console.log(`Not connected to Database...${err}`);
    process.exit();
})