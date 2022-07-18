const throwCard = (card) => () => {
  xhrPost('/game/throw-card', `id=${card.id}`, updateCards);
};

const drawCard = () => {
  xhrPost('/game/draw-card', '', updateCards);
};

const initGame = () => {
  xhrGet('/game/play', '', updateCards)
};

window.onload = initGame;
