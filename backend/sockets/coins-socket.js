import { getCryptocurrencies } from '../utils/cryptocurrency.js';
import { getFiatCurrencies } from '../utils/fiatcurrency.js';

const lastUpdate = {
  fiat: 0,
  cryptocurrency: 0
};
const updateInterval = {
  fiat: 60000,
  cryptocurrency: 45000
};
let ioCache;
let socketCache;
let coinsCache;
let fiatcurrenciesCache;

function coinEvents(socket, io) {
  ioCache = io;
  socketCache = socket;
  updateCryptocurrencies(socket, io);
  updateFiatcurrencies(socket, io);
}

async function updateCryptocurrencies(socket, io) {
  const currentTime = Date.now();

  if (
    currentTime - lastUpdate.cryptocurrency >=
    updateInterval.cryptocurrency
  ) {
    lastUpdate.cryptocurrency = currentTime;
    const coins = await getCryptocurrencies();
    getFiatCurrencies();
    console.log('updating cryptocurrencies', coins);
    coinsCache = coins;
    io.emit('update_cryptocurrencies', coins);
  } else {
    console.log(
      'outside the update interval, using the cache. current range:',
      currentTime - lastUpdate.cryptocurrency
    );
    socket.emit('update_cryptocurrencies', coinsCache);
  }
}

async function updateFiatcurrencies(socket, io) {
  const currentTime = Date.now();

  if (currentTime - lastUpdate.fiat >= updateInterval.fiat) {
    lastUpdate.fiat = currentTime;
    const fiatcurrencies = await getFiatCurrencies();
    console.log('updating fiat currencies', fiatcurrencies);
    fiatcurrenciesCache = fiatcurrencies;
    io.emit('update_fiatcurrencies', fiatcurrencies);
  } else {
    console.log(
      'outside the update interval, using the cache. current range:',
      currentTime - lastUpdate.fiat
    );
    socket.emit('update_fiatcurrencies', fiatcurrenciesCache);
  }
}

setInterval(() => {
  updateCryptocurrencies(socketCache, ioCache);
}, updateInterval.cryptocurrency);

setInterval(() => {
  updateFiatcurrencies(socketCache, ioCache);
}, updateInterval.fiat);

export default coinEvents;
