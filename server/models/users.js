const mongoose = require("mongoose")

const user = new mongoose.Schema({

    userName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogIn: { type: Date, default: Date.now },
    lastUpdeta: { type: Date, default: Date.now },
    // isLogIn: { type: Boolean, default: false },
    // isAdmin: { type: Boolean, default: false },

},
    { timestamps: true }
)
module.exports = mongoose.model("User", user)
