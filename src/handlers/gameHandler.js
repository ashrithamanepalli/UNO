const drawCard = (req, res) => {
  const { game } = req;
  game.drawCard(req.session.username);
  res.json({
    playerCards: game.handOf(req.session.username),
    ...game.tableInfo()
  });
};

const throwCard = (req, res) => {
  const { game } = req;
  game.throwCard(req.session.username, req.body.id);
  res.json({
    playerCards: game.handOf(req.session.username),
    ...game.tableInfo()
  });
};

const playGame = (req, res) => {
  const { game } = req;
  game.init();
  console.log({
    playerCards: game.handOf(req.session.username),
    ...game.tableInfo()
  });
  res.json({
    playerCards: game.handOf(req.session.username),
    ...game.tableInfo()
  });
};

const serveGamePage = (req, res, next) => {
  res.redirect('/uno.html');
};

const canStartGame = (req, res, next) => {
  res.json({ areSlotsFilled: req.game.areSlotsFilled() });
}

module.exports = { drawCard, throwCard, playGame, serveGamePage, canStartGame };
