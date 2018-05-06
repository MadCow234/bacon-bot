'use strict';

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    discord_id: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {});

  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.strike);
  };
  
  return user;
};