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
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  return color;
}

export { randomColors };
