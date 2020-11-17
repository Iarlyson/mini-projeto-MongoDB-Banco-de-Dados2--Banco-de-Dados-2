const router = require('express-promise-router')();
const pedidos = require('../controllers/pedidos.controller');

// Rota responsável por criar um novo 'pedidos': (POST): localhost:3000/api/pedidos/:id
router.post('/pedidos/:id', pedidos.criarpedido);
// Rota responsável por listar todos os 'pedidos' de um usuario: (GET): localhost:3000/api/produtos
router.get('/pedidos/:id', pedidos.listapedidosdecliente)
// Rota responsável por listar todos os 'pedidos' de um usuario que tenha determinado produto: (GET): localhost:3000/api/produtos
router.get('/pedidosproduto/:id', pedidos.listapedidosdeproduto)


module.exports = router;