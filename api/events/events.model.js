const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSocketSchema = Schema({
  workgroup: String,
  id: {
    type: ObjectId,
    index: true,
    unique: true
  },
}, { strict: false,  versionKey: false, _id: false, id:true });

module.exports= mongoose.model('eventsSocket', eventsSocketSchema);