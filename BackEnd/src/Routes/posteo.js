const { Router } = require("express");
const { createPostHandler, getPostHandler } = require("../Handlers/posteo");
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
posteoRouter.put("/", (request, response) => {
  console.log("editando....");
});

// // ELIMINAR UN POSTEO POR NOMBRE
// posteoRouter.delete("/", (request, response) => {
//   console.log("elimina posteo por titulo");
// });

module.exports = posteoRouter;