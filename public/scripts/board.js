const clearBoard = () => {
  ['#deck', '#cardsLot', '#playerCards'].forEach((selector) => {
    const cardsHolder = document.querySelector(selector);
    cardsHolder.innerHTML = '';
  })
};

const generateCard = (card, cardContainer) => {
  const cardsHolder = document.querySelector(cardContainer);
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.id = card;
  cardElement.innerText = card;
  cardsHolder.appendChild(cardElement);
};

const generateDeck = (cards) => {
  generateCard('UNO', '#deck');
};

const generateLot = (card) => {
  generateCard(card, '#cardsLot');
};

const generatePlayerCards = (cards) => {
  cards.forEach(card => {
    generateCard(card, '#playerCards');
  });
};

const updateCards = ({ response: rawRes }) => {
  const response = JSON.parse(rawRes);

  clearBoard();

  generatePlayerCards(response.cardsInHand.player1);
  generateDeck(response.deck);
  generateLot(response.cardOnPlay);

};