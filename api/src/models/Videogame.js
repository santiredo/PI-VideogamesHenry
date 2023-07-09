const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDateFormat(value) {
          if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
            throw new Error('The field release must have the format YYYY-MM-DD.');
          }
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },{timestamps: false})
};