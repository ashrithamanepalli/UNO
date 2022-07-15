const clearBoard = () => {
  const cardsHolder = document.querySelector('#cardsHolder');
  cardsHolder.innerHTML = '';
};

const generateCard = (card) => {
  const cardsHolder = document.querySelector('#cardsHolder');
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.id = card;
  cardElement.innerText = card;
  cardsHolder.appendChild(cardElement);
};

const updateCards = ({ response: rawRes }) => {
  const response = JSON.parse(rawRes);

  clearBoard();

  response.cardsInHand.player1.forEach(card => {
    generateCard(card);
  });
};