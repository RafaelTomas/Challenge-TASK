'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.STRING ,
        allowNull: false,
      },
      descricao:{
        type: Sequelize.STRING ,
        allowNull: false,
      },
      data_inicio:{
        type: Sequelize.DATEONLY,
      },
      data_fim:{
        type: Sequelize.DATEONLY,
      },
      status:{
        type: Sequelize.ENUM('pendente','concluida'),
        allowNull: false,
        default:'pendente',
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
  
    return await queryInterface.dropTable('tasks');
   
  }
};
