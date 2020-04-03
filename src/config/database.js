require('dotenv').config({
    path: '.env'
})
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose; 