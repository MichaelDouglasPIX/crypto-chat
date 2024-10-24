import {
  loginContainer,
  loginForm,
  loginInput
} from '../dom-elements/login-element.js';
import { randomColors } from '../utils/random-colors.js';
import { startConnection } from '../sockets/chat-socket.js';

function loginHandler() {
  loginForm.addEventListener('submit', loginSubmit);
}

const loginSubmit = (event) => {
  event.preventDefault();

  const user = {};
  user.id = crypto.randomUUID();
  user.name = loginInput.value;
  user.color = randomColors();

  loginContainer.style.display = 'none';
  startConnection(user);
};

export { loginHandler };
