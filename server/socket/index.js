const {io} = require('../');
// const {EventEmitter} = require('events');
// const event = new EventEmitter();
const event = require('./event');
const {getAllFirs} = require('../../api/events/events.controller');
let cliente = ''
io.on('connection', client => {
  console.log('socket', client.id)

  client.on('room', (data, callback) => {

    if (!data) {
      return callback({
        err: true,
        message: 'El nombre/sala es necesario',
      });
    }
    client.join(data);
    client.broadcast.to(data).emit('listener', 'entro nuevo usuario id socket:   ' + client.id);
    return callback({data, ok: true});
  });

  event.on('getAll',(data) => {
    //console.log('desde socket: ',data)
    console.log('test', data[0].workgroup)
    client.broadcast.to(data[0].workgroup).emit('getAllIo', data)
  })
  // require('./test').test(client);
});

module.exports = {cliente};
