const drawCard = (gameState) => {
  const pickedCard = gameState.deck.pop();
  gameState.player1.push(pickedCard);
};

const startGame = (req, res, next) => {
  const status = {
    player1: [1, 2],
    deck: [3, 4],
    lot: []
  };

  const { pathname } = req.url;
  if (pathname === '/game') {
    req.url.pathname = '/uno.html';
  }

  if (pathname === '/status') {
    res.end(JSON.stringify(status));
    return;
  }

  if (pathname === '/draw-card') {
    drawCard(status);
    res.end(JSON.stringify(status));
    return;
  }

  next();
};

module.exports = { startGame };
