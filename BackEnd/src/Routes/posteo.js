const {Router} = require("express");
const posteoRouter = Router();

// CREA UN POSTEO
posteoRouter.post("/", (request, response) => {
  console.log("crea un posteo");
});

// TRAE LISTA DE POSTEO
posteoRouter.get("/", (request, response) => {
  console.log("Lista de posteo....");
});

// TRAE UN POSTEO POR ID
posteoRouter.get("/", (request, response) => {
  console.log("buscando posteo por ID");
});

// ELIMINAR UN POSTEO POR NOMBRE
posteoRouter.delete("/", (request, response) => {
  console.log("elimina posteo por titulo");
});

// EDITA UN POSTEO POR NOMBRE
posteoRouter.put("/", (request, response) => {
  console.log("editando....");
});


module.exports = posteoRouter;