const drawCard = (req, res) => {
  const { game } = req;
  game.drawCard();
  res.json(game.status);
};

const throwCard = (req, res) => {
  const { game } = req;
  game.throwCard(req.body.id);
  res.json(game.status);
};

const playGame = (req, res) => {
  console.log(req.url);
  req.game.init();
  res.json(req.game.status);
};

const serveGamePage = (req, res, next) => {
  console.log(req.url);
  res.redirect('/uno.html');
};

module.exports = { drawCard, throwCard, playGame, serveGamePage };
