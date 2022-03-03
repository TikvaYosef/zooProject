const mongoose = require("mongoose")

const animal = new mongoose.Schema({
    animalName: { type: String, required: true },
    birthDay: { type: Date, required: true },
    cageNumber: { type: Number, required: true },
    gender: { type: String, required: true },
    animalType: { type: String, required: true }
},
    { timestamps: true }

)
module.exports = mongoose.model("Animal", animal)


