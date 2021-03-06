const { Sequelize } = require('sequelize');

module.exports.db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    define: {
        timestamps: false,
    },
});