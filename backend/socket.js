import io from './server.js';
import chatEvents from './sockets/chat-socket.js';

io.on('connection', (socket) => {
  console.log('connection', socket.id);
  chatEvents(socket, io);
});
