const startGame = (req, res, next) => {
  const { pathname } = req.url;
  if (pathname === '/game') {
    req.url.pathname = '/uno.html';
  }

  if (pathname === '/status') {
    const status = {
      player1: [1, 2],
      deck: [3, 4],
      lot: []
    };

    res.end(JSON.stringify(status));
    return;
  }

  next();
};

module.exports = { startGame };
