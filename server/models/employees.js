const mongoose = require("mongoose")


const employye = new mongoose.Schema({
    employyeName: { type: String, require: true },
    job: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true }
},
    { timestamps: true }
)
module.exports = mongoose.model("Employye", employye)
