const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("PostLike", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
  });
};
