const socket = io();

// Escuchar informacion
socket.on('connect', () => {
  console.log('conectado al servidor');
});

socket.on('disconnect', () => {
  console.log('Perdimos la conexion al servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
  user: 'Daniel',
  message: 'Hello world',
}, (resp) => {
  console.log('Respuesta Server: ', resp);
});
// Escuchar informacion
socket.on('enviarMensaje', (message) => {
  console.log('Servidor: ', message);
});