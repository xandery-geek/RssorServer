const { DataTypes, Model } = require('sequelize');
const sequelize = require('./mysql')
const User = require('../model/user')
const Category = require('../model/category')

class Rss extends Model {}

Rss.init({
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
  address:{
    type: DataTypes.STRING,
    allowNull: false
  },
  followedDate:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  followers:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  postsNum:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lastPost:{
    type: DataTypes.DATE,
    allowNull: true
  },
  updateInterval:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  lastCrawled:{
    type:DataTypes.DATE,
    allowNull: true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Rss', // We need to choose the model name
  timestamps: false,
  tableName: 'Rss'
});

Category.hasMany(Rss)
Rss.belongsTo(Category, {
    foreignKey: 'category',
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
    allowNull: true
})

User.hasMany(Rss)
Rss.belongsTo(User, {
    foreignKey: 'owner',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
    allowNull: false
})

module.exports = User