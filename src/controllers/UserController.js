//Aqui vai ficar o controller
const User = require('../models/User');

const UserController = {
  index: (req, res, next) => {
    try{
    const user = await User.find({})
    res.status(200).send(user)
    }
    catch(err){
      res.status(401).send(err)
    }
  },

  getById: (req, res, next) => {
    try {
      const user = await User.findById(req.params.user_id)
      return res.status(200).send(user)
    } catch (error) {
      res.status(401).send(err)
    }
  },
  
  create: (req, res, next) => {
    const {nome, senha, email, cpf, telefone, logradouro_rua, logradouro_cep, logradouro_bairro, logradouro_cidade, banco_transferencia, nivel_investidor} = req.body
    try {
      const user = await User.create({ nome, senha, email, cpf, telefone, logradouro_rua, logradouro_cep, logradouro_bairro, logradouro_cidade, banco_transferencia, nivel_investidor});
      res.status(201).send(user)
    } catch (error) {
      res.status(401).send(error)
    }
  },

  change: async(req, res, next) => {
    console.log(req.params.user_id)
    try{
      await User.findOneAndUpdate({_id: req.params.user_id}, { nome: req.body.nome, senha: req.body.senha, email: req.body.email, cpf: req.body.cpf, telefone: req.body.telefone, logradouro_rua: req.body.logradouro_rua, logradouro_cep: req.body.logradouro_cep, logradouro_bairro: req.body.logradouro_bairro, logradouro_cidade: req.body.logradouro_cidade, banco_transferencia: req.body.banco_transferencia, nivel_investidor: req.body.nivel_investidor})
      res.status(204).send(`Alterado com o id ${req.params.user_id}`)
    }
    catch(err){
      res.status(401).send(`Erro: ${err}`)
    }
  },

  delete: async(req, res, next) => {
    try{
      await User.findByIdAndDelete(req.params.user_id)
      res.status(204).send({});

    }
    catch(err){
      res.status(401).send({})
    }
  }
}

module.exports = UserController;