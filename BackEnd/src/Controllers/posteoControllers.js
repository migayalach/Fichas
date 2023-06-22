const { Posteo } = require("../DataBase/dataBase");
const { Op } = require("sequelize");

const createPosteo = async (titulo, testimonio, usuarioId) => {
  const newPost = await Posteo.create({ titulo, testimonio });
  await newPost.setUsuario(usuarioId);
  return newPost;
};

const buscarPosteo = async (titulo) => {
  const dataBasePosteo = await Posteo.findAll({
    where: {
      titulo: {
        [Op.iLike]: `%${titulo}%`,
      },
    },
  });
  if (dataBasePosteo.length === 0)
    throw Error(`No hay ningun posteo con el titulo: ${titulo}`);
  return dataBasePosteo;
};

const mostrarPosteos = async () => await Posteo.findAll();

const updatePosteoBd = async (titulo, testimonio) => {
  const updatePosteo = await Posteo.update(
    { titulo, testimonio },
    { where: { titulo } }
  );
  if (updatePosteo === 0)
    throw Error(`No se pudo actualizar el posteo con titulo: ${titulo}`);
  return { success: `Posteo actualizado` };
};

const deletePosteoBd = async (titulo) => {
  const eliminarPosteo = await Posteo.destroy({
    where: {
      titulo,
    },
  });
  if (eliminarPosteo === 1)
    return `Posrteo con titulo: ${titulo} fue eliminado con exito`;
  throw Error(
    `No se pudo eliminar el Posteo con titulo: ${titulo} porque no existe`
  );
};

module.exports = {
  createPosteo,
  buscarPosteo,
  mostrarPosteos,
  updatePosteoBd,
  deletePosteoBd,
};
