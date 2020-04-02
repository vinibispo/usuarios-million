const User = require('../models/User');
const TOKEN = "123456"

const UserController = {
  index: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
      const user = await User.find({})
      return res.status(200).send(user)
      }
      catch(err){
        return res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  getById: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      try {
        const user = await User.findById(req.params.user_id)
        return res.status(200).send(user)
      } catch (error) {
        res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },
  
  create: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      const {nome, senha, email, cpf, telefone, logradouro_rua, logradouro_cep, logradouro_bairro, logradouro_cidade, banco_transferencia, nivel_investidor} = req.body
      try {
        const user = await User.create({ nome, senha, email, cpf, telefone, logradouro_rua, logradouro_cep, logradouro_bairro, logradouro_cidade, banco_transferencia, nivel_investidor});
        res.status(201).send(user)
      } catch (error) {
        res.status(401).send(error)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  change: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await User.findOneAndUpdate({_id: req.params.user_id}, { nome: req.body.nome, senha: req.body.senha, email: req.body.email, cpf: req.body.cpf, telefone: req.body.telefone, logradouro_rua: req.body.logradouro_rua, logradouro_cep: req.body.logradouro_cep, logradouro_bairro: req.body.logradouro_bairro, logradouro_cidade: req.body.logradouro_cidade, banco_transferencia: req.body.banco_transferencia, nivel_investidor: req.body.nivel_investidor})
        res.status(204).send(`Alterado com o id ${req.params.user_id}`)
      }
      catch(err){
        res.status(401).send(`Erro: ${err}`)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  delete: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await User.findByIdAndDelete(req.params.user_id)
        res.status(204).send({});
      }
      catch(err){
        res.status(401).send(err)
      }
    }
  }
}

module.exports = UserController;