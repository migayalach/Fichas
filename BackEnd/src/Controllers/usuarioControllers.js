const { Usuario, Posteo } = require("../DataBase/dataBase");
const crearUsuario = async (nombre, pais, cargo, empresa, imagen) =>
  await Usuario.create({ nombre, pais, cargo, empresa, imagen });

//
const buscarUsuario = async (nombre) => {
  const dataBaseUser = await Usuario.findAll({
    where: {
      nombre,
    },
  });
  if (dataBaseUser.length === 0)
    throw Error("No hay registrado ningun usario con este nombre");
  return dataBaseUser;
};

const mostrarAllUsers = async () => await Usuario.findAll();

module.exports = {
  crearUsuario,
  buscarUsuario,
  mostrarAllUsers,
};
