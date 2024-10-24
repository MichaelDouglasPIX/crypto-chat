import {
  chatForm,
  chatInput,
  chatMessages
} from '../dom-elements/chat-elements.js';
import { sendMessage } from '../sockets/chat-socket.js';

function chatHandler() {
  chatForm.addEventListener('submit', getMessage);
}

function getMessage(event) {
  event.preventDefault();
  sendMessage(chatInput.value);
  chatInput.value = '';
}

function processMessage(data, user) {
  const { content, userName, userColor, userId } = data;
  const message =
    userId == user.id
      ? createMessageSelfElement(content)
      : createMessageOtherElement(content, userName, userColor);

  chatMessages.appendChild(message);
  scrollScreen();
}

function createMessageSelfElement(content) {
  const div = document.createElement('div');
  div.classList.add('message__self');
  div.innerHTML = content;

  return div;
}

function createMessageOtherElement(content, sender, senderColor) {
  const div = document.createElement('div');
  const span = document.createElement('span');

  div.classList.add('message__other');
  span.classList.add('message__sender');
  span.style.color = senderColor;

  div.appendChild(span);

  span.innerHTML = sender;
  div.innerHTML += content;
  return div;
}

function scrollScreen() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

export { chatHandler, processMessage };
