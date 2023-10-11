const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tittle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      dafaultValue: false,
      allowNull: true,
    },
    likeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // Puedes establecer un valor predeterminado si es necesario
    },
  });
};
