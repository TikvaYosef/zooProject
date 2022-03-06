const animal = require("../models/animals")

const getAll = async (req, res) => {
    await animal.find()
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ massege: err }));
}

const getById = async (req, res) => {
    await animal.findById(req.params.id)
        .then((result) => { res.status(200).send(result) })
        .catch((error) => res.status(404).send({ error: "animal not found" }))
}

const addanimal = async (req, res) => {
    await animal
        .create(req.body)
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ massage: err }))
}

const update = async (req, res) => {
    await animal
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ massage: err }))

}

const deleteOne = async (req, res) => {

    animal.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "animal deleted successfully" })
    })

}

module.exports = { getAll, getById, addanimal, update, deleteOne }