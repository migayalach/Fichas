// MIDDLEWARES
const ERROR = 400;
const validarUsuario = (request, response, next) => {
  const { nombre, carnet, pais, cargo, empresa } = request.body;
  if (!nombre) return response.status(ERROR).send(`Falta nombre`);
  if (!carnet) return response.status(ERROR).send(`Falta carnet`);
  if (!pais) return response.status(ERROR).send(`Falta pais`);
  if (!cargo) return response.status(ERROR).send(`Falta cargo`);
  if (!empresa) return response.status(ERROR).send(`Falta empresa`);
  next();
};

const validarCarnet = (request, response, next) => {
  const { carnet } = request.body;
  if (!carnet) return response.status(ERROR).send(`Falta carnet`);
  next();
};

module.exports = { validarUsuario, validarCarnet };
