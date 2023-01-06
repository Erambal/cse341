const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ashley Rambal');
});

module.exports = routes;
