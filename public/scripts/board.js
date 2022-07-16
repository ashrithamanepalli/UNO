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

const generateDeck = (cards) => {
  const cardElem = generateCard({ symbol: 'UNO', color: 'black' });
  const cardsHolder = document.querySelector('#deck');
  cardElem.addEventListener('click', drawCard);
  cardsHolder.appendChild(cardElem);
};

const generateLot = (card) => {
  const cardElem = generateCard(card);
  const cardsHolder = document.querySelector('#cardsLot');
  cardsHolder.appendChild(cardElem);
};

const generatePlayerCards = (cards) => {
  cards.forEach(card => {
    const cardElem = generateCard(card);
    const cardsHolder = document.querySelector('#playerCards');
    cardElem.addEventListener('click', throwCard(card));
    cardsHolder.appendChild(cardElem);
  });
};

const updateCards = ({ response: rawRes }) => {
  const response = JSON.parse(rawRes);

  clearBoard();

  generatePlayerCards(response.cardsInHand.player1);
  generateDeck(response.deck);
  generateLot(response.cardOnPlay);

};
