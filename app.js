const express = require('express');
const app = express();

const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development);

// test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// define a route to get all users
app.get('/users', async (req, res) => {
  const users = await sequelize.query('SELECT * FROM users');
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
