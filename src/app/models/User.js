const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
    }, {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync(10);
          user.senha = bcrypt.hashSync(user.senha, salt);
        }
      },
    })
    User.prototype.validPassword = function(senha) {
      return bcrypt.compareSync(senha, this.senha);
    }
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


