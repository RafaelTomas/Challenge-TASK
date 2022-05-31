const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Task, { foreignKey: 'userId', as: 'task' });
  }
}

module.exports = User;













// const { Sequelize } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define("User", {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         login: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         senha: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//     });
// };


