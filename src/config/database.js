// aqui vai ficar a conexão com o banco de dados

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user-million', {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

module.exports = mongoose;