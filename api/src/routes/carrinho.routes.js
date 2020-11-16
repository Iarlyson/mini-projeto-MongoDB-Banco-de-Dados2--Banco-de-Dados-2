const router = require('express-promise-router')();
const carrinho = require('../controllers/carrinho.controller');


// ==> Rota responsável por criar um novo 'Carrinho' pelo Id e para o atualizar: (POST): localhost:3000/api/carrinho/:id
router.post('/carrinho/:id', carrinho.criarcarrinho);
// ==> Rota responsável por listar todo o 'Carrinho' pelo Id: (GET): localhost:3000/api/carrinho/:id
router.get('/carrinho/:id', carrinho.listarCarrinho);
// ==> Rota responsável por deeletar todo o 'Carrinho' pelo Id: (DELETE): localhost:3000/api/carrinho/:id
router.delete('/carrinho/:id', carrinho.excluirCarrinho);


module.exports = router;