const { drawCard, throwCard, playGame } = require('./handlers/gameHandler');
const express = require('express');

const logRequest = (req, res, next) => {
  console.log(`[${req.method}] ==> ${req.url}`);
  next();
};

const injectGame = (game) => (req, res, next) => {
  req.game = game;
  next();
};

const createApp = ({ rootDirectory }, game) => {
  const app = express();

  app.use(logRequest);
  app.use(injectGame(game));

  app.get('/refresh', (req, res) => {
    res.json(req.game.status);
  });

  app.get('/play', playGame);
  app.post('/draw-card', drawCard);
  app.post('/throw-card', throwCard);

  app.use(express.static(rootDirectory));

  return app;

};

module.exports = { createApp };
