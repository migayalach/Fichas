const { Router } = require("express");
const userRouter = Router();

// CREA UN USUARIO
userRouter.post("/", (request, response) => {
  console.log("crea un usuario");
});

// TRAE LISTA DE USUARIOS
userRouter.get("/", (request, response) => {
  console.log("Lista de usuarios....");
});

// TRAE UN USUARIO POR ID
userRouter.get("/", (request, response) => {
  console.log("buscando usuario por ID");
});

// ELIMINAR UN USUARIO POR NOMBRE
userRouter.delete("/", (request, response) => {
  console.log("elimina usuario por nombre");
});

// EDITA UN USARIO POR NOMBRE
userRouter.put("/", (request, response) => {
  console.log("editando....");
});

module.exports = userRouter;
