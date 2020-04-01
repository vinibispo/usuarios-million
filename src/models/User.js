/*<<<<<<< criaTest
//Aqui vai ser definido o model de usuários
var mongoose = require('../config/database'); 

const User = mongoose.model('user', { 
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  fone: { type: String, required: true },
  endereco: { type: String, required: true },
  email: { type: String, required: true },
  banco: { type: Number, required: true },
  nivel: { type: Number, required: true }
});

=======
*/
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  logradouro_rua: {
    type: String,
    required: true,
  },
  logradouro_cep: {
    type: Number,
    required: true,
  },
  logradouro_bairro: {
    type: String,
    required: true,
  },
  logradouro_cidade: {
    type: String,
    required: true,
  },
  banco_transferencia: {
    type: String,
    required: true,
  },
  nivel_investidor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;