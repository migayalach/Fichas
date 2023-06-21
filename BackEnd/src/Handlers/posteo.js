const SUCCESS = 200,
  ERROR = 400;

const {
  createPosteo,
  buscarPosteo,
  mostrarPosteos,
} = require("../Controllers/posteoControllers");

const createPostHandler = async (request, response) => {
  const { titulo, testimonio, usuarioId } = request.body;
  try {
    const newPost = await createPosteo(titulo, testimonio, usuarioId);
    response.status(SUCCESS).json(newPost);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getPostHandler = async (request, response) => {
  let { titulo } = request.query;
  titulo = titulo.trim();
  try {
    const resultado = titulo
      ? await buscarPosteo(titulo)
      : await mostrarPosteos();
    response.status(ERROR).json(resultado);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const { Usuario, Posteo } = require("../DataBase/dataBase");

module.exports = { createPostHandler, getPostHandler };
