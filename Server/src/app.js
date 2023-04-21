const express = require("express");

const app = express();
const logger = require("morgan");

app.use(express.json());


const router = require("./routes/index");

const urlencoded = express.urlencoded({ extended: false });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

app.use(logger("dev"));

app.use("/rickandmorty", router);

app.use("/", (req, res) => {
    res.status(200).send("Esta funcionando la App")
})

module.exports = app;