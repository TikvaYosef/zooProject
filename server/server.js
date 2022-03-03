

const express = require("express")

const app = express();
const PORT = process.env.PORT || 9090
app.listen(PORT)

app.get("/",(req,res)=>res.send("server is up"))



