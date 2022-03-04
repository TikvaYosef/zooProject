const animal = require("../models/animals")

const getAll = async (req, res) => {
    await animal.find()
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ massege: err }));
}

const getById = async (req, res) => {
    await animal.findById(req.params.id)
        .then((id) => { if (res.id == id) res.send(res) })
        .catch((err) => res.status(404).send({ massege: err }))
}

const addanimal = async (req , res) => {
    await animal
        .create(req.body)
        .then(res =>  res.status(201).json({ success: true, message: req.body.animal }))
        .catch(err => res.status(404).send({ massage: err }))
}

const update = async (req, res) => {
    const animall = await animal.find(animal => animal.id === parseInt(req.params.id));
    if (!animall) {
        res.status(404).send('The employee with the given ID was not found.');
    }
    const { animalName, birthDay, cageNumber, gender, animalType } = req.body;
    animall.animalName = animalName;
    animall.birthDay = birthDay;
    animall.cageNumber = cageNumber;
    animall.gender = gender;
    animall.animalType = animalType;
    res.send(animall);
}

const deleteOne = async (req, res) => {
    const animall = await animal.find(animal => animal.id === parseInt(req.params.id));
    if (!animall) {

        res.status(404).send('The employee with the given ID was not found.');
    }
    const index = animal.indexOf(animall);
    animal.splice(index, 1);
    res.send(animall);
}

module.exports = { getAll, getById, addanimal, update, deleteOne }