const ERROR = 400;
const validarPosteo = (request, response, next) => {
  const { titulo, testimonio, usuarioId } = request.body;
  if (!titulo) return response.status(ERROR).send(`Falta titulo`);
  if (!testimonio) return response.status(ERROR).send(`Falta testimonio`);
  if (!usuarioId)
    return response
      .status(ERROR)
      .send(`Falta el usuario que realiza este posteo`);
  next();
};

const validarTitulo = (request, response, next) => {
  const { titulo } = request.body;
  if (!titulo) return response.status(ERROR).send(`Falta titulo, sin este dato no podemos modificar el posteo`);
  next();
};

module.exports = { validarPosteo, validarTitulo };
