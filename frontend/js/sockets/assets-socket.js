import {
  processCryptocurrencyPrices,
  updateFiatTableRow
} from '../event-handlers/cryptocurrency-handler.js';
import socket from '../utils/socket-connection.js';

socket.on('update_cryptocurrencies', (data) => {
  console.log('update_cryptocurrencies', data);
  processCryptocurrencyPrices(data);
});

socket.on('update_fiatcurrencies', (data) => {
  console.log('update_update_fiatcurrencies', data);
  updateFiatTableRow(data);
});
