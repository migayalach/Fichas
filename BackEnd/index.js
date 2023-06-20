const app = require("./src/app");
const { dataBase } = require("./src/DataBase/dataBase");
const PORT = 3001;

dataBase.sync({ force: true });
app.listen(PORT, () => {
  console.log(`Servidor levantado con exito en el puerto: ${PORT}`);
});
