const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Posteo",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testimonio: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
