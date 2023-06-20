const { Router } = require("express");
const mainRouter = Router();
const userRouter = require("../Routes/usuario");
const posteoRouter = require("../Routes/posteo");

mainRouter.use("/usuario", userRouter);
mainRouter.use("/posteo", posteoRouter);

module.exports = mainRouter;
