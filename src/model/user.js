const { DataTypes, Model } = require('sequelize');
const sequelize = require('./mysql')
const crypto = require('crypto')


class User extends Model {
  static checkPassword(password){

  }

  static checkEmail(email){
    
  }
}

User.init({
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true  
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender:{
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hash = crypto.createHash('sha1')
      hash.update(this.email + value);
      this.setDataValue(hash.digest())
    }
  },
  registerDate:{
    type: DataTypes.DATE,
    allowNull: true,
  },
  lastDate:{
    type: DataTypes.DATE,
    allowNull: true,
  },
  login:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  timestamps: false,
  tableName: 'Users'
});


module.exports = User