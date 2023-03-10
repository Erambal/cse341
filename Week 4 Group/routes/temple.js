const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);
routes.get('/published/', temples.findAllPublished);
routes.get('/:temple_id', temples.findOne);
routes.put('/:temple_id', temples.update);
routes.delete('/:temple_id', temples.delete);

routes.post('/', temples.create);
routes.delete('/', temples.deleteAll);


module.exports = routes;
