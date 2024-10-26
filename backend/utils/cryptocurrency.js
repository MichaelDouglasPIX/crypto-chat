import request from '../config/axios.js';
import config from '../config/config.js';

async function getCryptocurrencies() {
  const requestConfig = {
    method: 'get',
    url: `${config.coingecko.url}/coins/markets`,
    headers: {
      Accept: 'application/json'
    },
    params: {
      vs_currency: 'usd',
      ids: config.coingecko.coinIds
    }
  };

  try {
    const data = await request(requestConfig);
    return formatCoinData(data);
  } catch (error) {
    console.log('Entrou erro', error.message);
  }
}

function formatCoinData(coins) {
  return coins.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    currentPrice: coin.current_price,
    marketCap: coin.market_cap,
    image: coin.image
  }));
}

export { getCryptocurrencies };
