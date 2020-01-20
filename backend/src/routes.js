const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// get, post, put, delete

// Query Params: req.query (Filtros, Ordenação, Paginação)
// Route Params: req.params (Identificar recurso no update ou delete)
// Body: req.body (Criação ou alteração do registro)

// MongoDB (Não-relacional)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;