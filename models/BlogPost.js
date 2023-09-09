const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db'); // Import your Sequelize instance

class BlogPost extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'BlogPost',
      }
    );
  }
}

module.exports = BlogPost;