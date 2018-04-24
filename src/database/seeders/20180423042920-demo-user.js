'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'demo-user',
      discord_id: '15419846548716254151',
      points: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], 
    {}).catch(err => console.log(`${err.message}: ${err.name}`))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
