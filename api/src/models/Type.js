//No nesecitamos otro id porque no vamos a tener otro tipo de dato, porque se genera solo en la tabla
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("type", {
    // id: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
