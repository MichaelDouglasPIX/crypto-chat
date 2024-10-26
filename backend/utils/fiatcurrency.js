import config from '../config/config.js';
import request from '../config/axios.js';

const openExchengeRates = config.openExchengeRates;

async function getFiatCurrencies() {
  const requestConfig = {
    method: 'get',
    url: `${openExchengeRates.url}/${openExchengeRates.key}/latest/${openExchengeRates.base}`,
    headers: {
      Accept: 'application/json'
    },
    params: {
      symbols: config.openExchengeRates.symbols
    }
  };

  try {
    const data = await request(requestConfig);
    console.log(formatFiatData(data));
    return formatFiatData(data);
  } catch (error) {
    console.log('Entrou erro', error.message);
  }
}

function formatFiatData(fiat) {
  return {
    USD: (1 / fiat.conversion_rates.USD).toFixed(2),
    EUR: (1 / fiat.conversion_rates.EUR).toFixed(2),
    JPY: (1 / fiat.conversion_rates.JPY).toFixed(2),
    CNY: (1 / fiat.conversion_rates.CNY).toFixed(2)
  };
}

export { getFiatCurrencies };
