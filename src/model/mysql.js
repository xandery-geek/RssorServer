const fs = require('fs')
const { Sequelize } = require('sequelize');

const data = fs.readFileSync('../config/db.json')
const config = JSON.parse(data);

const sequelize = new Sequelize(config['database'], config['user'], config['password'], {
    host: config['host'],
    dialect: mysql
  });

module.exports = sequelize
