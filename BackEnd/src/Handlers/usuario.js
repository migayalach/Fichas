const {
  crearUsuario,
  buscarUsuario,
  mostrarAllUsers,
} = require("../Controllers/usuarioControllers");
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

// BUSCA UN USUARIO POR QUERY
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

// MOSTRAT USUARIO POR ID O NOMBRE PASADO POR PARAMS
const getUserHandler = (request, response) => {
  const { data } = request.params;
  try {
    console.log("buscando usuario por ID " + data);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const { Usuario, Posteo } = require("../DataBase/dataBase");

module.exports = { createUserHandler, getUsersHandler, getUserHandler };
