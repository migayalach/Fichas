const { Router } = require("express");
const {
  createPostHandler,
  getPostHandler,
  updatePosteoHandler,
  eliminarPosteoHandler
} = require("../Handlers/posteo");
const posteoRouter = Router();

// CREA UN POSTEO
posteoRouter.post("/", createPostHandler);

// TRAE LISTA DE POSTEO POR QUERY SI Y NO
posteoRouter.get("/", getPostHandler);

// // TRAE UN POSTEO POR ID
// posteoRouter.get("/", (request, response) => {
//   console.log("buscando posteo por ID");
// });

// EDITA UN POSTEO POR NOMBRE
posteoRouter.put("/", updatePosteoHandler);

// ELIMINAR UN POSTEO POR NOMBRE
posteoRouter.delete("/:titulo", eliminarPosteoHandler);

module.exports = posteoRouter;
