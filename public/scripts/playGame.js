const throwCard = (card) => () => {
  xhrPost('/game/throw-card', `id=${card.id}`, updateCards);
};

const drawCard = () => {
  xhrPost('/game/draw-card', '', updateCards);
};

const initGame = () => {
  xhrGet('/game/play', '', updateCards);
  refreshBoard();
};

const refreshBoard = () => {
  setInterval(() => {
    xhrGet('/game/currentState', '', updateCards);
  }, 1000);
};

window.onload = initGame;
