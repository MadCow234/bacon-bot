'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: { type: DataTypes.STRING, unique: true },
    discord_id: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Strikes);
  };
  return User;
};