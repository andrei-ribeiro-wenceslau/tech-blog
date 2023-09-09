const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db'); // Import your Sequelize instance
const bcrypt = require('bcrypt');

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'User',
      }
    );
  }

  // Hash the user's password before saving it to the database
  static async beforeCreate(user) {
    user.password = await bcrypt.hash(user.password, 10);
  }
}

module.exports = User;
