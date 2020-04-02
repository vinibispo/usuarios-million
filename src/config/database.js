
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/millionUsuarios';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose; 