const { Router } = require("express");
const mainRouter = Router();

mainRouter.use("/usuario", (request, response)=>{
  console.log("estamos en usuario");
});

mainRouter.use("/posteo", (request, response)=>{
  console.log("estamos en posteo");
});

module.exports = mainRouter;
