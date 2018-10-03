const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchemca = Schema({
  title: String,
  description: String,
  workgroup: String,
});

module.exports= mongoose.model('test', TestSchemca);