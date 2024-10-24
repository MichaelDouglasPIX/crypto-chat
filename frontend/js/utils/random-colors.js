const colors = [
  'red',
  'yellow',
  'orange',
  'blueviolet',
  'aqua',
  'burlywood',
  'cadetblue',
  'cornflowerblue',
  'chartreuse',
  'coral',
  'crimson',
  'cyan',
  'darkcyan',
  'darkgoldenrod',
  'deeppink',
  'orangered',
  'gold',
  'greenyellow',
  'lime',
  'hotpink'
];

function randomColors() {
  console.log('entrou no color');
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  console.log(`Index: ${randomIndex} color: ${color}`);
  return color;
}

export { randomColors };
