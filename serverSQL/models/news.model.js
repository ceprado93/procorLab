const Sequelize = require('sequelize');


module.exports = (sequielize, DataTypes) => sequielize.define('News', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING(3000),
        allowNull: false
    },
    Photo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

});