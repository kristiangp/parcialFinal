const { DataTypes } = require('sequelize');

function defineTenni( sequelize ) {
    sequelize.define('tenni', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        talla: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        disponible: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        stock: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        fechaLanzamiento: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        // Other model options go here
        timestamps: false
    });
}

module.exports = defineTenni;
