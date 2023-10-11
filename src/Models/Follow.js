const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Follow", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};
