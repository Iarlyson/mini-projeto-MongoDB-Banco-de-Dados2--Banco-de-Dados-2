const router = require('express-promise-router')();
const pedidos = require('../controllers/pedidos.controller');


router.post('/pedidos/:id', pedidos.criarpedido);
router.get('/pedidos/:id', pedidos.listapedidosdecliente)


module.exports = router;