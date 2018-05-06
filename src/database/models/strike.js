'use strict';

module.exports = (sequelize, DataTypes) => {
  var strike = sequelize.define('strike', {
    reason: DataTypes.STRING
  }, {});

  strike.associate = function(models) {
    // associations can be defined here
  };

  return strike;
};