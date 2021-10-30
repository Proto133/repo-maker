
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
            
const Content = sequelize.define('content', {
    
        id: {
            type: DataTypes.INTEGER, 
            PK: true,
            AutoIncrement: true,
            hidden Option C: 'FuckOFF' 
        },
        userId: {
            type: DataTypes.INTEGER,  
        },
        trashId: {
            type: DataTypes.INTEGER,  
        },
        inLandfill: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false 
        }                
},{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'content',
})

                
module.exports = Content;
                