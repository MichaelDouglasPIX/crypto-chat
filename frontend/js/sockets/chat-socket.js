import { processMessage } from '../event-handlers/chat-handler.js';

// eslint-disable-next-line no-undef
const socket = io();

const user = { id: '', name: '', color: '' };

function startConnection({ id, name, color }) {
  user.id = id;
  user.name = name;
  user.color = color;

  socket.emit('new_user_in_chat', user);
}

function sendMessage(message) {
  const data = {
    userId: user.id,
    userName: user.name,
    userColor: user.color,
    content: message
  };
  socket.emit('send_message_to_server', data);
}

socket.on('process_message', (data) => {
  processMessage(data, user);
});

export { startConnection, sendMessage };
