function chatEvents(socket, io) {
  socket.on('new_user_in_chat', (user) => {
    console.log('new_user_in_chat', user);
    io.emit('connected_to_chat', user.name);
  });

  socket.on('send_message_to_server', (data) => {
    let date = new Date();

    const hour = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    data['hour'] = hour;

    io.emit('process_message', data);
  });
}

export default chatEvents;
