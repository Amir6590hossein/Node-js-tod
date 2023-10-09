const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_db", "root", "Ahjh1382", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
