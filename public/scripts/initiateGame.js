const clearBoard = () => {
  const cardsHolder = document.querySelector('#cardsHolder');
  cardsHolder.innerHTML = '';
};

const refreshBoard = ({ response: rawRes }) => {
  clearBoard();

  const response = JSON.parse(rawRes);
  const cardsHolder = document.querySelector('#cardsHolder');
  const playerEl = document.createElement('p');
  const deckEl = document.createElement('p');
  const lotEl = document.createElement('p');
  playerEl.innerText = 'player1  :   ' + response.player1;
  deckEl.innerText = 'deck  :   ' + response.deck;
  lotEl.innerText = 'lot  :   ' + response.lot;

  cardsHolder.appendChild(playerEl);
  cardsHolder.appendChild(deckEl);
  cardsHolder.appendChild(lotEl);
  return;
};

const throwCard = () => {
  xhrPost('/throw-card', '', refreshBoard);
};

const drawCard = () => {
  xhrPost('/draw-card', '', refreshBoard);
};

const initGame = () => {
  xhrGet('/refresh', '', refreshBoard)
};

window.onload = initGame;
