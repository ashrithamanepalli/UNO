const throwCard = (gameState) => {
  const thrownCard = gameState.player1.pop();
  gameState.lot.push(thrownCard);
};

const drawCard = (gameState) => {
  const pickedCard = gameState.deck.pop();
  gameState.player1.push(pickedCard);
};

const startGame = (status) => {
  return (req, res, next) => {
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

    if (pathname === '/throw-card') {
      throwCard(status);
      res.end(JSON.stringify(status));
      return;
    }

    next();
  };
}

module.exports = { startGame };
