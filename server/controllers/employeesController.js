const employees = require("../models/employees")

const getAll = async (req, res) => {
    await employees.find()
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ massege: err }));
}

const getById = async (req, res) => {
    await employees.findById(req.params.id)
        .then((result) => { res.status(200).send(result) })
        .catch((error) => res.status(404).send({ error: "employee not found" }))
}

const addEmployee = async (req, res) => {
    await employees
        .create(req.body)
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ massage: err }))


}

const update = async (req, res) => {
    await employees
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ massage: err }))
}

const deleteOne = async (req, res) => {
    employees.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "employee deleted successfully" })
    })

}

module.exports = { getAll, getById, addEmployee, update, deleteOne }