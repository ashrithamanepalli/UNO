const { createApp } = require('./src/app.js');
const { Game } = require('./src/handlers/gameHandler.js');

const config = {
  rootDirectory: './public'
};

const main = () => {
  const game = new Game();
  const app = createApp(config, game);
  app.listen(8888, () => console.log('Listening on port 8888'));
};

main();
