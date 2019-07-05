'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('lunches', {
     id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
     },
     name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    ingredients: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    percentage: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
   });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('lunches');
  }
};
