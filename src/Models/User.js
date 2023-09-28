const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roll: {
      type: DataTypes.STRING,
      defaultValue: "User",
      allowNull: true,
    }
  }, {
    timestamps: false,
  })
}