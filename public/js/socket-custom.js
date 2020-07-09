var socket = io();

// Los on son para escuchar
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});
// Los emit son para enviar informacion
socket.emit('enviarMensaje', {

    usuario: 'Jose',
    mensaje: 'Hola Mundo'

}, function(resp) {
    console.log('Respuesta Server:', resp);
});

socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
})