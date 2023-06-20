const { crearUsuario } = require("../Controllers/usuarioControllers");
const SUCCESS = 400,
  ERROR = 200;

// CREA UN USUARIO
const createUserHandler = async (request, response) => {
  const { nombre, pais, cargo, empresa, imagen } = request.body;
  try {
    const newUsuario = await crearUsuario(nombre, pais, cargo, empresa, imagen);
    response.status(SUCCESS).json({ success: newUsuario });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUsersHandler = async (request, response) => {
  const { nombre } = request.query;
  try {
    const resultado = nombre
      ? await buscarUsuario(nombre)
      : await mostrarAllUsers();
    response.status(SUCCESS).json(resultado);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const { Usuario, Posteo } = require("../DataBase/dataBase");

const buscarUsuario = () => {
  return "usuario";
};

const mostrarAllUsers = async () => await Usuario.findAll();

module.exports = { createUserHandler, getUsersHandler };
