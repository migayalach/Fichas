const { Router } = require("express");
// MIDDLEWARE'S
const {
  validarUsuario,
  validarCarnet,
} = require("../Middlewares/usuarioMiddleware");
const {
  createUserHandler,
  getUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../Handlers/usuario");
const userRouter = Router();

// CREA UN USUARIO
userRouter.post("/", validarUsuario, createUserHandler);

// TRAE LISTA DE USUARIOS SI NO SE MANDA NADA POR QUERY
// PERO SI SE MANDA UN NOMBRE TE LO TRAE
userRouter.get("/", getUsersHandler);

// TRAE UN USUARIO POR ID O NOMBRE PASADO POR PARAMS
userRouter.get("/:data", getUserHandler);

// EDITA UN USARIO POR CARNET
userRouter.put("/", validarCarnet, updateUserHandler);

// ELIMINAR UN USUARIO POR CARNET
userRouter.delete("/:carnet", deleteUserHandler);

module.exports = userRouter;
