const xhrGet = (path, data = '', callBack) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      callBack(xhr);
    }
    return;
  });
  xhr.open('GET', path);
  xhr.send(data);
};

const xhrPost = (path, data, callBack) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      callBack(xhr);
    }
    return;
  });
  xhr.open('POST', path);
  xhr.send(data);
};

const createCards = ({ response: rawRes }) => {
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

const initGame = () => {
  xhrGet('/status', '', createCards)
};

window.onload = initGame;
