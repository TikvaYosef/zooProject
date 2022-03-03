const employees = require("../models/employees")

const getAll = async (req, res) => {
    await employees.find()
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ massege: err }));
}

const getById = async (req, res) => {
    await employees.findById(req.params.id)
        .then((id) => { if (res.id == id) res.send(res) })
        .catch((err) => res.status(404).send({ massege: err }))
}

const addEmployee = async (req, res) => {
    await employees
        .create(req.body)
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ massage: err }))
}


const update = async (req, res) => {
    const employee = await employees.find(employee => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.status(404).send('The employee with the given ID was not found.');
    }
    const { employyeName, job, email, phone } = req.body;
    employee.employyeName = employyeName;
    employee.job = job;
    employee.email = email;
    employee.phone = phone;

    res.send(employee);
}

const deleteOne = async (req, res) => {
    const employee = await employees.find(employee => employee.id === parseInt(req.params.id));
    if (!employee) {

        res.status(404).send('The employee with the given ID was not found.');
    }
    const index = employees.indexOf(employee);
    employees.splice(index, 1);
    res.send(employee);
}

module.exports = { getAll, getById, addEmployee, update, deleteOne }