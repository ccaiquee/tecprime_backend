'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {   
      return queryInterface.createTable('ShoppingCart', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          alloNull: false
        },
        user: {
          type: Sequelize.UUID,
          references: { model: 'User', key: 'code' },       
          alloNull: false
        },
        produto_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          alloNull: false
        },
        nome: {
          type: Sequelize.STRING(60),
          alloNull: false
        },
        preco: {
          type: Sequelize.DECIMAL(10,2),
          alloNull: false
        },       
        qtd: { 
          type: Sequelize.INTEGER,
          alloNull: false
        }       
      });   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('ShoppingCart');
  }
};
