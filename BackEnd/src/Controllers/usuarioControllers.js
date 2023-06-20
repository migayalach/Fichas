const { Usuario, Posteo } = require("../DataBase/dataBase");
const crearUsuario = async (nombre, pais, cargo, empresa, imagen) =>
  await Usuario.create({ nombre, pais, cargo, empresa, imagen });

module.exports = {
  crearUsuario,
};
