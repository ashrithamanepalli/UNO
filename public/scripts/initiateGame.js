const throwCard = (card) => () => {
  xhrPost('/throw-card', `id=${card.id}`, updateCards);
};

const drawCard = () => {
  xhrPost('/draw-card', '', updateCards);
};

const initGame = () => {
  xhrGet('/play', '', updateCards)
};
