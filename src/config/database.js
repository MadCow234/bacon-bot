// Load a local .env file if in development or test
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").load({path: "./src/config/.env"});
}

var options = {
  underscored: true
}

module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "operatorsAliases": false,
    "define": options
  },
  "test": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "operatorsAliases": false,
    "define": options
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    },
    "operatorsAliases": false,
    "define": options
  }
}
