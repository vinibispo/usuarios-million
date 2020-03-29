const mongoose = require('mongoose');

const uri = 'mongodb://localhost/millionUsuarios';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose; 