'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('User', { 
        code: {
          type: Sequelize.UUID,
          primaryKey: true,
          alloNull: false
        },
        email: {
          type: Sequelize.STRING(120),
          alloNull: false
        },
        password_hash: {
          type: Sequelize.STRING(180),
          alloNull: false
        },        
      });    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('User');
  }
};
