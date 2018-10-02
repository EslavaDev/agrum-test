const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchemca = Schema({
  title: String,
  description: String
});

module.exports= mongoose.model('test', TestSchemca);