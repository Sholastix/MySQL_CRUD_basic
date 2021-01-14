const { Sequelize } = require('sequelize');

module.exports.db = new Sequelize('crud', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false,
    },
});