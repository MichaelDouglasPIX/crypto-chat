const config = {
  coingecko: {
    url: process.env.COINGECKO_URL,
    coinIds: 'bitcoin,ethereum,binancecoin,solana'
  },
  openExchengeRates: {
    url: process.env.EXCHANGE_RATE_API,
    key: process.env.EXCHANGE_RATE_KEY,
    base: 'BRL',
    symbols: 'USD,EUR,JPY,CNY'
  }
};

export default config;
