

    function data(){axios.get('/v1/events/'+room, {
    })
    .then(function (response) {
      console.log(response.data);
     renderizarUsuarios(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })}

const socket = io();
// Escuchar informacion
socket.on('connect', () => {
  console.log('conectado al servidor');
  socket.emit('room', room, (data) => {
    console.log(data)
  });
});

socket.on('disconnect', () => {
  console.log('Perdimos la conexion al servidor');
});

// Enviar informacion
// socket.emit('saveUserSocket', {
//   user: 'Daniel',
//   message: 'Hello world',
// }, (resp) => {
//   console.log('Respuesta Server: ', resp);
// });
// Escuchar informacion
socket.on('getAllIo', (message) => {
  console.log('Servidor: ', message);
  renderizarUsuarios(message)
});

socket.on('listener', (message) => {
  console.log(message)
})