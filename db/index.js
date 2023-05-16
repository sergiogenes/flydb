const Sequelize = require("sequelize");
require("dotenv").config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_DIALECT = process.env.DB_DIALECT;
const DB_URI = process.env.DB_URI;

const sequelize = new Sequelize(DB_URI, {
  dialectModule: require("pg"),
});

module.exports = sequelize;
