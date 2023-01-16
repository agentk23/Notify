const {Sequelize, Model, DataTypes} = require('sequelize');      
module.exports = (sequelize) => {
    class Note extends Model {
        static associate(models) {
            Note.belongsTo(models.User, {foreignKey: 'uuid'});
        }
    }
    Note.init({
        noteID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'User',
                key: 'uuid'
            }
        }

    }, {
        sequelize,
        modelName: 'Note',
        tableName: 'Note',
    });
    return Note;
}