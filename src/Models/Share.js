const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Share", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });
};
