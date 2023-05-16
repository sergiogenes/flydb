const Sequelize = require("sequelize");
require("dotenv").config();

const DB_URI = process.env.DB_URI;

const sequelize = new Sequelize(DB_URI, {
  dialectModule: require("pg"),
  logging: false,
});

module.exports = sequelize;
