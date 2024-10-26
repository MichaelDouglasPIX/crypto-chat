import { chatHandler } from './event-handlers/chat-handler.js';
import { loginHandler } from './event-handlers/login-handler.js';
import './event-handlers/cryptocurrency-handler.js';
import { updateDate } from './utils/updateHeader.js';

loginHandler();
chatHandler();
updateDate();
