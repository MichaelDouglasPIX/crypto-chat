import {
  connectedToChat,
  processMessage
} from '../event-handlers/chat-handler.js';
import socket from '../utils/socket-connection.js';

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

socket.on('connected_to_chat', (name) => {
  connectedToChat(name);
});

export { startConnection, sendMessage };
