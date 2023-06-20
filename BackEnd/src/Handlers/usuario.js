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
const getUserHandler = async (request, response) => {
  const { data } = request.params;
  const typeData = isNaN(data) ? "nombre" : "id";
  try {
    const user = await getUserData(typeData);
    response.status(SUCCESS).json(user);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const { Usuario, Posteo } = require("../DataBase/dataBase");
const getUserData = (data) => {
  return data;
}



module.exports = { createUserHandler, getUsersHandler, getUserHandler };
