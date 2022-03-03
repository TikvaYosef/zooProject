const employeeRouter = require("express").Router();
const employeeRequestHeandler = require("../controllers/employeesController")


employeeRouter.get("/employees", employeeRequestHeandler.getAll)

employeeRouter.get("/:id", employeeRequestHeandler.getById)

employeeRouter.post("/postemployee", employeeRequestHeandler.addEmployee)

employeeRouter.put("/:id", employeeRequestHeandler.update)

employeeRouter.delete("/:id", employeeRequestHeandler.deleteOne)

module.exports = employeeRouter;