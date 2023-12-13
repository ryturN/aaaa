const {DataTYpes, DataTypes} = require('sequelize');
const db = require('../db/db');

const User = db.define('user', {
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
})

User.sync().then(() => {
    console.log('table created')
})

module.exports = User;