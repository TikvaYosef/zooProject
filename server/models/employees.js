const mongoose = require("mongoose")


const employye = new mongoose.Schema({
    employyeName: {type:String,required:true},
    job: {type:String,required:true},
    email: { type: String, required: true },
    phone: { type: Number, required: true, max: 10 }

},
    { timestamps: true }
)
module.exports = mongoose.model("Employye", employye)
