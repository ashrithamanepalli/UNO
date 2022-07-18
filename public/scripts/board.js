const clearBoard = () => {
  ['#deck', '#cardsLot', '#playerCards'].forEach((selector) => {
    const cardsHolder = document.querySelector(selector);
    cardsHolder.innerHTML = '';
  })
};

const generateCard = (card) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.classList.add(card.color);
  cardElement.id = card.symbol;
  cardElement.innerText = card.symbol;
  return cardElement;
};

const generateDeck = ({ deck, isCurrentPlayer }) => {
  const cardElem = generateCard({ symbol: 'UNO', color: 'black' });
  const cardsHolder = document.querySelector('#deck');
  if (isCurrentPlayer) {
    cardElem.addEventListener('click', drawCard);
  }
  cardsHolder.appendChild(cardElem);
};

const generateLot = (card) => {
  const cardElem = generateCard(card);
  const cardsHolder = document.querySelector('#cardsLot');
  cardsHolder.appendChild(cardElem);
};

const generatePlayerCards = ({ playerCards, isCurrentPlayer }) => {
  playerCards.forEach(card => {
    const cardElem = generateCard(card);
    const cardsHolder = document.querySelector('#playerCards');

    if (isCurrentPlayer) {
      cardElem.addEventListener('click', throwCard(card));
    }

    cardsHolder.appendChild(cardElem);
  });
};

const updateCards = ({ response: rawRes }) => {
  const response = JSON.parse(rawRes);

  clearBoard();

  generatePlayerCards(response);
  generateDeck(response);
  generateLot(response.cardOnPlay);

};
