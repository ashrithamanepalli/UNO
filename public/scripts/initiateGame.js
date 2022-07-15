const throwCard = () => {
  xhrPost('/throw-card', '', updateCards);
};

const drawCard = () => {
  xhrPost('/draw-card', '', updateCards);
};

const initGame = () => {
  xhrGet('/play', '', updateCards)
};
