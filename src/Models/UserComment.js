const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserComment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};
