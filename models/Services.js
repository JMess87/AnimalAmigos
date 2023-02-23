const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Services extends Model { }

Services.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        requester: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        responder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        service_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        service_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        service_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        service_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        service_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        service_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        service_limitations: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comments_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'comments',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'services',
    }
);

module.exports = Services;
