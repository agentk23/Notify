const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Note, {foreignKey: 'noteID'});
        }
    }
    User.init({
        uuid:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photoURL: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {sequelize, modelName: 'User', tableName: 'User'});
    return User;

}

