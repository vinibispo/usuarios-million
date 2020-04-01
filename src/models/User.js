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

module.exports = User;