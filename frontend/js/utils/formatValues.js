function formatValues(value) {
  //const numericValue = value.replace(/[^\d]/g, '');

  const formattedValue = Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formattedValue;
}

export default formatValues;
