const { Usuario, Posteo } = require("../DataBase/dataBase");
const crearUsuario = async (nombre, carnet, pais, cargo, empresa, imagen) =>
  await Usuario.create({ nombre, carnet, pais, cargo, empresa, imagen });

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

// const mostrarAllUsers = async () => await Usuario.findAll();
const mostrarAllUsers = async () => {
  const data = await Usuario.findAll({
    include: [{ model: Posteo }],
  });
  return data;
};

const getUserData = async (typeData, data) => {
  const response =
    typeData === "nombre"
      ? await Usuario.findAll({
          where: {
            nombre: data,
          },
          include: {
            model: Posteo,
            attributes: ["titulo", "testimonio"],
          },
        })
      : await Usuario.findByPk(data, {
          include: {
            model: Posteo,
            attributes: ["titulo", "testimonio"],
          },
        });
  return response;
};

const updateUserInfo = async (nombre, carnet, pais, cargo, empresa, imagen) => {
  const updateUser = await Usuario.update(
    { nombre, pais, cargo, empresa, imagen },
    { where: { carnet } }
  );
  if (updateUser === 0) throw Error("Algo salio mal");
  return { success: `Usuario con carnet ${carnet} modificado con exito` };
};

const deleteUserInfo = async (carnet) => {
  const eliminado = await Usuario.destroy({
    where: {
      carnet,
    },
  });
  if (eliminado === 1)
    return `Usuario con carnet: ${carnet} fue eliminado con exito`;
  throw Error(
    `No se pudo eliminar el usuario con carnet: ${carnet} porque no existe`
  );
};

module.exports = {
  crearUsuario,
  buscarUsuario,
  mostrarAllUsers,
  getUserData,
  updateUserInfo,
  deleteUserInfo,
};
