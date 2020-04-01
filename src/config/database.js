//<<<<<<< criaTest
// aqui vai ficar a conexão com o banco de dados
//mongoose.connect('mongodb://localhost:27017/user-million', {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/millionUsuarios';
mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;