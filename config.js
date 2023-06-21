module.exports = {
    development: {
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      host: 'localhost',
      dialect: 'mysql'
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'mysql'
    }
  };
  