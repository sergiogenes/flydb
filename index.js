const express = require("express");
const router = require("./routes");
const db = require("./db");
require("dotenv").config();
const cors = require("cors");

const server = express();

const PORT = process.env.PORT || 3001;

const corsOptions = {
  credentials: true,
  origin: process.env.CORS_ORIGIN,
};

server.use(cors(corsOptions));

server.use(express.json());

server.use("/", router);

server.use("/", (req, res) => {
  res.send("Aplicación corriendo!");
});

db.sync({ force: false })
  .then(() => {
    console.log("Base de datos sincronizada");
    server.listen(PORT, () => {
      console.log("El server está escuchando en el puerto: " + PORT);
    });
  })
  .catch((error) => console.error(error));
