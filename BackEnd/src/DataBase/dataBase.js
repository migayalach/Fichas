const { Sequelize } = require("sequelize");
const UserModel = require("../Models/Usuario");
const PostModel = require("../Models/Posteo");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const dataBase = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

UserModel(dataBase);
PostModel(dataBase);

const { Usuario, Posteo } = dataBase.models;
Usuario.hasMany(Posteo);
Posteo.belongsTo(Usuario);

module.exports = { dataBase, ...dataBase.models };
