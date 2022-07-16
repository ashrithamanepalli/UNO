const randInt = (limit) => {
  return Math.floor((Math.random() * 1000) % limit);
};

const generateAllCards = () => {
  const symbols = [1, 2, 3, 4];
  const colors = ['red', 'green'];

  const cards = [];
  for (let symIndex = 0; symIndex < symbols.length; symIndex++) {
    for (let colIndex = 0; colIndex < colors.length; colIndex++) {
      const color = colors[colIndex];
      const symbol = symbols[symIndex];
      cards.push({
        color, symbol, id: `${color}${symbol}_1`
      });
    }
  }
  return cards;
};

const shuffleCards = (cards) => {
  for (let index = 0; index < 10; index++) {
    const pickFrom = randInt(cards.length);

    const card = cards.splice(pickFrom, 1);
    cards = cards.concat(card);
  }
  return cards;
};

module.exports = { generateAllCards, shuffleCards };
