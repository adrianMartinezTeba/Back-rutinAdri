const express = require("express");
const app = express();
require("dotenv").config();//para poder usar dotenv
const PORT = process.env.PORT || 3001;

const { dbConnection } = require("./config/config")

app.use(express.json())

dbConnection()

app.use("/users", require("./routes/users"));
app.use("/routines", require("./routes/routines"));
app.use("/exercises", require("./routes/exercises"));



app.listen('https://back-rutinadri.vercel.app', ()=> console.log(`Server started`));