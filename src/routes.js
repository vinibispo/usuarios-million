const {Router } = require('express')
const router = Router()
const UserController = require('../src/controllers/UserController');

//Aqui vai ficar as rotas
// router.get('/', (req, res)=>{
//     res.send('Hello World')
// })
router.get('/', UserController.index);
router.get('/user/:user_id', UserController.getById);
router.post('/', UserController.create);
router.put('/:user_id', UserController.change);
router.delete('/user/:user_id', UserController.delete);


module.exports = router