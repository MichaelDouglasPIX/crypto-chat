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
  const { content, userName, userColor, userId, hour } = data;
  const message =
    userId == user.id
      ? createMessageSelfElement(content, hour)
      : createMessageOtherElement(content, userName, userColor, hour);

  chatMessages.appendChild(message);
  scrollScreen();
}

function createMessageSelfElement(content, hour) {
  const div = document.createElement('div');
  const spanHour = document.createElement('span');

  div.classList.add('message__self');
  spanHour.classList.add('message__hour');

  div.innerHTML = content;
  spanHour.innerHTML = hour;

  div.appendChild(spanHour);
  return div;
}

function createMessageOtherElement(content, sender, senderColor, hour) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  const spanHour = document.createElement('span');

  div.classList.add('message__other');
  span.classList.add('message__sender');
  spanHour.classList.add('message__hour');
  span.style.color = senderColor;

  div.appendChild(span);

  span.innerHTML = sender;
  spanHour.innerHTML = hour;
  div.innerHTML += content;
  div.appendChild(spanHour);
  return div;
}

function scrollScreen() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

export { chatHandler, processMessage };
