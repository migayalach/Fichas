const {
  crearUsuario,
  buscarUsuario,
  mostrarAllUsers,
  getUserData,
  updateUserInfo,
  deleteUserInfo,
} = require("../Controllers/usuarioControllers");
const SUCCESS = 400,
  ERROR = 200;

// CREA UN USUARIO
const createUserHandler = async (request, response) => {
  const { nombre, carnet, pais, cargo, empresa, imagen } = request.body;
  try {
    const newUsuario = await crearUsuario(
      nombre,
      carnet,
      pais,
      cargo,
      empresa,
      imagen
    );
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

// MOSTRAR USUARIO POR ID O NOMBRE PASADO POR PARAMS
const getUserHandler = async (request, response) => {
  const { data } = request.params;
  const typeData = isNaN(data) ? "nombre" : "id";
  try {
    const user = await getUserData(typeData, data);
    response.status(SUCCESS).json(user);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

// EDITAR USUARIO POR CARNET
const updateUserHandler = async (request, response) => {
  const { nombre, carnet, pais, cargo, empresa, imagen } = request.body;
  try {
    const updateUser = await updateUserInfo(
      nombre,
      carnet,
      pais,
      cargo,
      empresa,
      imagen
    );
    response.status(SUCCESS).json(updateUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteUserHandler = async (request, response) => {
  const { carnet } = request.params;
  try {
    const deleteUser = await deleteUserInfo(carnet);
    response.status(SUCCESS).json(deleteUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  createUserHandler,
  getUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
