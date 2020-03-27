const {Router } = require('express')
const route = Router()

route.get('/', (req, res)=>{
    res.send('Hello World')
})
//Aqui vai ficar as rotas
module.exports = route