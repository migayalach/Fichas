const { Router } = require("express");
const {createUserHandler, getUsersHandler }= require("../Handlers/usuario");
const userRouter = Router();

// CREA UN USUARIO
userRouter.post("/", createUserHandler);

// TRAE LISTA DE USUARIOS
userRouter.get("/", getUsersHandler);










// TRAE UN USUARIO POR ID O POR NOMBRE
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
