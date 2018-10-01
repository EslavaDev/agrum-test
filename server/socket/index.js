const {io} = require('../');

let cliente = ''
io.on('connection', client => {
  cliente = client;
  console.log('socket', client.id)
  require('./test').test(client);
});

module.exports = {cliente};
