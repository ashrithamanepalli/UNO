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
  req.game.init();
  res.json(req.game.status);
};

module.exports = { drawCard, throwCard, playGame };
