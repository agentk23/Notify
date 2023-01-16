module.exports = {
    HOST: "localhost",
    USER: "costin",
    PASSWORD: "costin232",
    DB: "notify",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  