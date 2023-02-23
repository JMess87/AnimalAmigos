const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Security extends Model { }

Security.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        securityQ1: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false,
        },
        securityQ1A: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        securityQ2: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false,
        },
        securityQ2A: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        securityQ3: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false,
        },
        securityQ3A: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'security',
    }
);

module.exports = Security;