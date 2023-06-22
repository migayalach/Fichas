const { Router } = require("express");
// MIDDLEWARE'S
const {
  validarPosteo,
  validarTitulo,
} = require("../Middlewares/posteoMiddleware");

const {
  createPostHandler,
  getPostHandler,
  updatePosteoHandler,
  eliminarPosteoHandler,
} = require("../Handlers/posteo");
const posteoRouter = Router();

// CREA UN POSTEO
posteoRouter.post("/", validarPosteo, createPostHandler);

// TRAE LISTA DE POSTEO POR QUERY SI Y NO
posteoRouter.get("/", getPostHandler);

// // TRAE UN POSTEO POR ID
// posteoRouter.get("/", (request, response) => {
//   console.log("buscando posteo por ID");
// });

// EDITA UN POSTEO POR NOMBRE
posteoRouter.put("/", validarTitulo, updatePosteoHandler);

// ELIMINAR UN POSTEO POR NOMBRE
posteoRouter.delete("/:titulo", eliminarPosteoHandler);

module.exports = posteoRouter;
