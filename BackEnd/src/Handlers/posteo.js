const SUCCESS = 200,
  ERROR = 400;

const {
  createPosteo,
  buscarPosteo,
  mostrarPosteos,
  updatePosteoBd,
  deletePosteoBd,
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
  // titulo = titulo.trim();
  try {
    const resultado = titulo
      ? await buscarPosteo(titulo)
      : await mostrarPosteos();
    response.status(ERROR).json(resultado);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const updatePosteoHandler = async (request, response) => {
  const { titulo, testimonio } = request.body;
  try {
    const updatePost = await updatePosteoBd(titulo, testimonio);
    response.status(SUCCESS).json(updatePost);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const eliminarPosteoHandler = async (request, response) => {
  const { titulo } = request.params;
  try {
    const deletePost = await deletePosteoBd(titulo);
    response.status(SUCCESS).json(deletePost);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  createPostHandler,
  getPostHandler,
  updatePosteoHandler,
  eliminarPosteoHandler,
};
