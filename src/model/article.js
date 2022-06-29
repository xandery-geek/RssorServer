const { DataTypes, Model } = require('sequelize');
const sequelize = require('./mysql')
const Rss = require('../model/rss')

class Article extends Model {}

Article.init({
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true  
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  time:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  favoite:{
    type:DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Category', // We need to choose the model name
  timestamps: false,
  tableName: 'Category'
});

Rss.hasMany(Article)
Article.belongsTo(Rss, {
    foreignKey: 'rss',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
    allowNull: false
})

module.exports = User