const express = require('express');
const db = require('../db');
const FrutaController = require("../controllers/FrutaController");

const routes = express.Router();

routes.get('/get-frutas', FrutaController.index);
routes.get('/get-frutas-pedido', FrutaController.indexPedido);

routes.post('/store-frutas-pedido', FrutaController.storePedido);

module.exports = routes;