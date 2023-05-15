const express = require("express");
const { Users } = require("../modules");

const router = express.Router();

router.get("/", (req, res) => {
  Users.findAll().then((users) => res.status(200).send(users));
});

router.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;
  Users.findOrCreate({
    where: { email },
    defaults: { firstName, lastName },
  })
    .then(([user, created]) => {
      if (created) return res.status(201).send(user);
      res.status(200).send("El correo electrónico ya existe!");
    })
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
