'use strict';
module.exports = (sequelize, DataTypes) => {
  var Strikes = sequelize.define('Strikes', {
    user_id: DataTypes.INTEGER,
    reason: DataTypes.TEXT
  }, {});
  Strikes.associate = function(models) {
    // associations can be defined here
    Strikes.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Strikes;
};