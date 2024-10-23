const chatMessages = document.querySelector('.chat__messages');

chatMessages.scrollTop = chatMessages.scrollHeight;

function adicionarMensagem(mensagem) {
    const novaMensagem = document.createElement('div');
    novaMensagem.textContent = mensagem; // Adicione o conteúdo da mensagem
    novaMensagem.classList.add('message_self'); // Ou a classe apropriada
    chatMessages.appendChild(novaMensagem);

    // Rolar para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

//adicionarMensagem("Nova mensagem enviada");
 