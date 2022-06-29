const { DataTypes, Model } = require('sequelize');
const sequelize = require('./mysql')
const User = require('../model/user')

class Category extends Model {}

Category.init({
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true  
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createTime:{
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Category', // We need to choose the model name
  timestamps: false,
  tableName: 'Category'
});

User.hasMany(Category)
Category.belongsTo(User, {
    foreignKey: 'owner',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
    allowNull: false
})

module.exports = User