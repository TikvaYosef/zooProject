const mongoose = require("mongoose")

const animal = new mongoose.Schema({
    animalName: { type: String, require: true },
    birthDay: { type: Date },
    cageNumber: { type: Number, require: true },
    gender: { type: String, require: true },
    animalType: { type: String, require: true }
},
    { timestamps: true }
)
module.exports = mongoose.model("Animal", animal)


