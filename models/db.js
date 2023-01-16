const {Sequelize} = require('sequelize');
const dbConfig = require("../config/db.config.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  const db = {};
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  db.users = require("./userModel.js")(sequelize);
  db.notes = require("./notesModel.js")(sequelize);

module.exports = db;
    
