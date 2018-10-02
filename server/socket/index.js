const {io} = require('../');
// const {EventEmitter} = require('events');
// const event = new EventEmitter();
const event = require('./event');
const {getAllFirs} = require('../../api/test/test.controller');
let cliente = ''
io.on('connection', client => {
  console.log('socket', client.id)
  event.on('getAll',(data) => {
    console.log('desde socket: ',data)
    client.emit('getAllIo', data)
  })
  // require('./test').test(client);
});

module.exports = {cliente};
