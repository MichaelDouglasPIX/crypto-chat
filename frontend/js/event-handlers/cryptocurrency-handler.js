import { cryptocurrencyTable } from '../dom-elements/cryptocurrency-elements.js';
import '../sockets/assets-socket.js';
import formatValues from '../utils/formatValues.js';

function processCryptocurrencyPrices(data) {
  createCryptoCurrencies(data);
}

function createCryptoCurrencies(data) {
  data.forEach((data) => {
    let row = document.querySelector(`tr.cryptocurrency__tr.${data.id}`);

    if (row) {
      updateCryptoTableRow(row, data);
    } else {
      const rowElement = createTableRow(data);
      cryptocurrencyTable.appendChild(rowElement);
    }
  });
}

function updateCryptoTableRow(row, data) {
  const { currentPrice, marketCap } = data;

  let priceElement = row.querySelector('.price');
  let lastPrice = priceElement.textContent;
  let currentConvertedPrice = formatValues(currentPrice);

  if (currentConvertedPrice > lastPrice) {
    row.querySelector('.price').classList.add('increased');
    row.querySelector('.price').classList.remove('decreased');
  } else if (currentConvertedPrice < lastPrice) {
    row.querySelector('.price').classList.add('decreased');
    row.querySelector('.price').classList.remove('increased');
  }

  row.querySelector('.price').innerText = formatValues(currentPrice);
  row.querySelector('.marketcap').innerText = formatValues(marketCap);
}

function createTableRow(data) {
  const { id, name, symbol, currentPrice, marketCap, image } = data;

  const tr = document.createElement('tr');
  const tdTitle = document.createElement('td');
  const tdPrice = document.createElement('td');
  const tdMarketcap = document.createElement('td');
  const imgLogo = document.createElement('img');
  const divCoin = document.createElement('div');
  const spanName = document.createElement('span');
  const spanSymbol = document.createElement('span');

  tr.classList.add('cryptocurrency__tr', id);
  tdTitle.classList.add('title');
  tdPrice.classList.add('price');
  tdMarketcap.classList.add('marketcap');
  imgLogo.classList.add('cryptocurrency__logo');
  divCoin.classList.add('cryptocurrency__coin');
  spanName.classList.add('cryptocurrency__name');
  spanSymbol.classList.add('cryptocurrency__symbol');

  spanName.innerHTML = name;
  spanSymbol.innerHTML = symbol;

  divCoin.appendChild(spanName);
  divCoin.appendChild(spanSymbol);
  imgLogo.src = image;
  imgLogo.alt = name;

  tdTitle.appendChild(imgLogo);
  tdTitle.appendChild(divCoin);
  tdPrice.innerHTML = formatValues(currentPrice);
  tdMarketcap.innerHTML = formatValues(marketCap);

  tr.appendChild(tdTitle);
  tr.appendChild(tdPrice);
  tr.appendChild(tdMarketcap);
  return tr;
}

function updateFiatTableRow(data) {
  const fiatContainer = document.querySelector('.fiat__start');
  for (const [currency, rate] of Object.entries(data)) {
    let row = document.querySelector(`tr.fiat__tr.${currency}`);

    if (row) {
      let priceElement = row.querySelector('.price');
      let lastPrice = priceElement.textContent;
      let currentConvertedPrice = formatValues(rate);

      if (fiatContainer) {
        fiatContainer.classList.remove('fiat__start');
      } else if (currentConvertedPrice > lastPrice) {
        row.querySelector('.price').classList.add('increased');
        row.querySelector('.price').classList.remove('decreased');
      } else if (currentConvertedPrice < lastPrice) {
        row.querySelector('.price').classList.add('decreased');
        row.querySelector('.price').classList.remove('increased');
      }

      row.querySelector('.price').innerText = formatValues(rate);
    }
  }
}

export { processCryptocurrencyPrices, updateFiatTableRow };
