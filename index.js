const { createApp } = require('./src/app.js');
const { shuffleCards, generateAllCards } = require('./src/deck.js');
const { Game } = require('./src/handlers/game.js');

const main = () => {
  const config = {
    rootDirectory: './public'
  };

  const cards = generateAllCards();
  const shuffledCards = shuffleCards(cards);

  const game = new Game(shuffledCards, 2);
  const app = createApp(config, game);
  app.listen(8888, () => console.log('Listening on port 8888'));
};

main();
