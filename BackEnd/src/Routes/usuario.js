const { Router } = require("express");
const {createUserHandler, getUsersHandler, getUserHandler }= require("../Handlers/usuario");
const userRouter = Router();

// CREA UN USUARIO
userRouter.post("/", createUserHandler);

// TRAE LISTA DE USUARIOS SI NO SE MANDA NADA POR QUERY
// PERO SI SE MANDA UN NOMBRE TE LO TRAE
userRouter.get("/", getUsersHandler);

// TRAE UN USUARIO POR ID O NOMBRE PASADO POR PARAMS
userRouter.get("/:data", getUserHandler);





// ELIMINAR UN USUARIO POR NOMBRE
userRouter.delete("/", (request, response) => {
  console.log("elimina usuario por nombre");
});

// EDITA UN USARIO POR NOMBRE
userRouter.put("/", (request, response) => {
  console.log("editando....");
});

module.exports = userRouter;
