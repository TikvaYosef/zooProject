const animalRouter = require("express").Router();
const animalRequestHeandler = require("../controllers/animalController")


animalRouter.get("/", animalRequestHeandler.getAll)

animalRouter.get("/:id", animalRequestHeandler.getById)

animalRouter.post("/", animalRequestHeandler.addanimal)

animalRouter.put("/:id", animalRequestHeandler.update)

animalRouter.delete("/:id", animalRequestHeandler.deleteOne)

module.exports = animalRouter;