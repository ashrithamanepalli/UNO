const express = require('express');
const morgan = require('morgan');
const session = require('cookie-session');

const { drawCard, throwCard, playGame, serveGamePage, canStartGame } =
  require('./handlers/gameHandler');
const { showLoginPage, loginUser, auth } = require('./handlers/loginHandler');
const { sessionConfig } = require('./.sessionConfig');

const injectGame = (game) => (req, res, next) => {
  req.game = game;
  next();
};

const loginRouter = () => {
  const router = express.Router();
  router.use(express.urlencoded({ extended: true }));

  router.get('/', showLoginPage);
  router.post('/', loginUser);

  return router;
};

const gameRouter = () => {
  const router = express.Router();

  router.use(auth);

  router.get('/', serveGamePage);
  router.get('/are-slots-filled', canStartGame);
  router.get('/play', playGame);
  router.post('/draw-card', drawCard);
  router.post('/throw-card', throwCard);

  return router;
};

const createApp = ({ rootDirectory }, game) => {
  const app = express();

  app.use(morgan('tiny'));
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(injectGame(game));

  app.use('/login', loginRouter());
  app.use('/game', gameRouter());
  app.get('/uno.html', auth);

  app.use(express.static(rootDirectory));

  return app;
};

module.exports = { createApp };
