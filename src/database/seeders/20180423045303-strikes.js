'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var db = require('../models');
    return db.user.findOne( { where: { username: 'demo-user' } } )
      .then( user => 
        queryInterface.bulkInsert('strikes', 
          [
            {
              user_id: user.id,
              reason: "demo strike",
              created_at: new Date(),
              updated_at: new Date()
            },
            {
              user_id: user.id,
              reason: "demo strike 2",
              created_at: new Date(),
              updated_at: new Date()
            }
          ], 
          {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('strikes', null, {});
  }  
};
