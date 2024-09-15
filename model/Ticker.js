const { DataTypes } = require('sequelize');
const sequelize = require('../database/pg');

const Ticker = sequelize.define('Ticker', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    last: {
        type: DataTypes.STRING,
        allowNull: false
    },
    buy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sell: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    base_unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Ticker;
