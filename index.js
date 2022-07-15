const { createApp } = require('./src/app.js');

const config = {
  rootDirectory: './public'
};

const status = {
  player1: [1, 2],
  deck: [3, 4],
  lot: []
};

const app = createApp(config, status);
app.listen(8888, () => console.log('Listening on port 8888'));
