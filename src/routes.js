const {Router } = require('express')
const router = Router()
const UserController = require('../src/controllers/UserController');

//Aqui vai ficar as rotas
// router.get('/', (req, res)=>{
//     res.send('Hello World')
// })
router.get('/', UserController.home)
router.get('/user', UserController.index);
router.get('/user/:user_id', UserController.getById);
router.post('/user', UserController.create);
router.put('/user/:user_id', UserController.change);
router.delete('/user/:user_id', UserController.delete);


module.exports = router