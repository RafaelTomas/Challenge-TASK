const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize){
        super.init({
           nome:DataTypes.STRING,
           descricao: DataTypes.STRING,
           data_inicio: DataTypes.DATE(6),
           data_fim: DataTypes.DATE(6),
           status: DataTypes.ENUM('pendente','concluida'),
        },{sequelize})
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      }

}

module.exports = Task;
