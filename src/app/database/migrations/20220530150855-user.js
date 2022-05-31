'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
       id: {
         type: Sequelize.INTEGER ,
         primaryKey: true, 
         autoIncrement: true,
         allowNull: false,
        },
        login: {
          type: Sequelize.STRING ,
          allowNull: false,
         },
        senha:{
          type: Sequelize.STRING ,
          allowNull: false,
        },
         createdAt:{
           type: Sequelize.DATE,
           allowNull: false,
         },
         updatedAt:{
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
   
  },

  async down (queryInterface, Sequelize) {
  
     return await queryInterface.dropTable('users');
   
  }
};
