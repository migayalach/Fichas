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

module.exports = { createPosteo, buscarPosteo, mostrarPosteos };
