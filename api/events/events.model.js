const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
  id: Schema.Types.ObjectId,
  workgroup: String,
  createdAt: { 
    type: Date,
    default: Date.now
  },
  updatedAt: { 
    type: Date,
    default: Date.now
  },
}, { strict: false });

module.exports= mongoose.model('event', eventSchema, 'event');