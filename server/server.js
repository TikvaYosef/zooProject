
require("dotenv").config()
const express = require("express")
require("./db/index")
const cors = require("cors");
const employeeRouter = require("./routes/employeesRouter")
const animalsrouter = require("./routes/animalsRouter")
const userrouter = require("./routes/usersRouter")
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 9090
app.listen(PORT)

const passport = require("passport");
app.use(passport.initialize())

require("./config/passport")(passport)


app.get("/", (req, res) => res.send("server is up"))
app.use("/employees",employeeRouter)
app.use("/employee", employeeRouter)
app.use("/postemployee", employeeRouter)
app.use("/updateemployee", employeeRouter)
app.use("/deleteemployee", employeeRouter)

app.use("./animals",animalsrouter)
app.use("/animal", animalsrouter)
app.use("/postanimal", animalsrouter)
app.use("/updateanimal", animalsrouter)
app.use("/deleteanimal", animalsrouter)

app.use("/employees", passport.authenticate("jwt", { session: false }), employeeRouter)
app.use("/animals", passport.authenticate("jwt", { session: false }), animalsrouter)


app.use("/auth", userrouter);


