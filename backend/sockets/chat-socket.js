function chatEvents(socket, io) {
  socket.on('new_user_in_chat', (user) => {
    console.log('new_user_in_chat', user);
    //socket.emit('process_message', `new user ${user.name}`);
  });

  socket.on('send_message_to_server', (data) => {
    io.emit('process_message', data);
  });
}

export default chatEvents;
