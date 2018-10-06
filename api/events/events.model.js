const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSocketSchema = Schema({
  workgroup: String,
}, { strict: false });

module.exports= mongoose.model('eventsSocket', eventsSocketSchema);