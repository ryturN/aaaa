const Sequelize = require('sequelize');

const db = new Sequelize(
    'daurDB',
    'root',
    'ryan14',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

module.exports = db;