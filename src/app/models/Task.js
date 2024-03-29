const { Model, DataTypes } = require('sequelize');

class Task extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      data_inicio: DataTypes.DATEONLY,
      data_fim: DataTypes.DATEONLY,
      status: DataTypes.ENUM('pendente', 'concluida'),
    }, { sequelize });
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }

}

module.exports = Task;
