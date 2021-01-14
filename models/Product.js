const { Sequelize } = require('sequelize');

const { db } = require('../config/initializeDatabase');

// Create model for DB.
module.exports.Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
    },
});