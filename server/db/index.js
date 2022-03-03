
const CONNECTIONSTRING = process.env.CONECTION_STRING;
const mongoose = require("mongoose")

mongoose.connect(CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongoose is connect"))
    .catch(err => console.log(err))

module.exports = mongoose.connection;


