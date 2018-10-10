const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
  workgroup: String,
  id: {
    type: ObjectId,
    index: true,
    unique: true
  },
  createdAt: { 
    type: Date,
    default: Date.now
  },
  updatedAt: { 
    type: Date,
    default: Date.now
  },
}, { strict: false,  versionKey: false, _id: false, id:true });

module.exports= mongoose.model('event', eventSchema, 'event');