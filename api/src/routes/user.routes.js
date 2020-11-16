const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');


// Rota responsável por criar um novo 'usuario': (POST): localhost:3000/api/usuario
router.post('/usuario', userController.createUser);
// Rota responsável por listar todos os 'usuarios': (GET): localhost:3000/api/usuario
router.get('/usuario', userController.listarUser);
// Rota responsável por selecionar 'usuario' pelo 'Id' : (GET): localhost:3000/api/usuario/:id
router.get('/usuario/:id', userController.buscaUsuarioporId);
// Rota responsável por atualizar 'usuario' pelo 'Id' : (PUT): localhost:3000/api/usuario/:id
router.put('/usuario/:id', userController.atualizarUserId);
// Rota responsável por deletar 'usuario' pelo 'Id': (DELETE): localhost:3000/api/usuario/:id
router.delete('/usuario/:id', userController.deletarUserId);

module.exports = router;