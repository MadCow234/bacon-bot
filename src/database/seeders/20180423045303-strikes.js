'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var db = require('../models');
    return db.User.findOne( { where: { username: 'demo-user' } } )
      .then( user => 
        queryInterface.bulkInsert('Strikes', 
          [
            {
              user_id: user.id,
              reason: "demo strike",
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              user_id: user.id,
              reason: "demo strike 2",
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], 
          {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Strikes', null, {});
  }  
};
