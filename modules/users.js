const Sequelize = require("sequelize");

const db = require("../db");

class Users extends Sequelize.Model {}

Users.init(
  {
    firstName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize: db,
    modelName: "users",
  }
);

module.exports = Users;
