
const users = require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    if (users.exists(req.body.email) == true) return res.status(400).json({ messege: "allready exists" })
    bcrypt.hash(req.body.password, 10, async (err, hashpassword) => {
        if (err) return res.status(500).json({ messege: "password error" })
        req.body.password = hashpassword;
        await users.create(req.body)
            .then(res => res.status(200).json({ messege: "new user has added" }))
            .catch(err => res.status(500).json({ err }))
    })
}

const login = async (req, res) => {
    if (users.exists(req.body.email) == false) return res.status(400).json({ message: 'email not found' });
    try {
        const user = await users.findOne({ email: req.body.email });
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Error' });
            if (!isMatch) return res.status(400).json({ message: 'incorrect Password' });
            const token = jwt.sign({ user }, process.env.SECRET_KEY , { expiresIn: '1h' });
            return res.status(200).json({ message: `wellcome: ${req.boby.userName}`, token });
        })
    } catch (err) {
        return res.status(500).json(err);
    }
}
module.exports = { register, login }


