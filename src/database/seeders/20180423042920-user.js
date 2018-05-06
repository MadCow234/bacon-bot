'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'demo-user',
      discord_id: '15419846548716254151',
      points: 0,
      created_at: new Date(),
      updated_at: new Date()
    }], 
    {}).catch(err => console.log(`${err.message}: ${err.name}`))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }  
};
