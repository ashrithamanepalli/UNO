class Game {
  #allCards;
  #status;
  #cardPerPlayer;

  constructor(cardPerPlayer) {
    this.#cardPerPlayer = cardPerPlayer;
  }

  init() {
    this.#allCards = [];
    this.#status = {
      cardsInHand: { player1: [] },
      cardOnPlay: null,
      deck: [],
      lot: []
    };

    this.#generateAllCards();
    this.#shuffleCards();
    this.#distributeCards();
  }

  #generateAllCards() {
    const symbols = [1, 2, 3, 4];
    const colors = ['red', 'green'];

    for (let symIndex = 0; symIndex < symbols.length; symIndex++) {
      for (let colIndex = 0; colIndex < colors.length; colIndex++) {
        const color = colors[colIndex];
        const symbol = symbols[symIndex];
        this.#allCards.push({
          color, symbol, id: `${color}${symbol}_1`
        });
      }
    }
  }

  #shuffleCards() {
    for (let index = 0; index < 10; index++) {
      const pickFrom = randInt(this.#allCards.length);

      const card = this.#allCards.splice(pickFrom, 1);
      this.#allCards = this.#allCards.concat(card);
    }
    // this.#allCards.splice(insertTo, 0, card);
  }

  #distributeCards() {
    const cardLimit = this.#cardPerPlayer;

    this.#status.cardsInHand.player1 = this.#allCards.slice(0, cardLimit);
    this.#status.cardOnPlay = this.#allCards[cardLimit]
    this.#status.deck = this.#allCards.slice(cardLimit + 1);
  }

  drawCard() {
    if (this.#status.deck.length <= 0) {
      return;
    }
    const pickedCard = this.#status.deck.pop();
    this.#status.cardsInHand.player1.push(pickedCard);
  };

  findCardPosition(cards, cardId) {
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].id === cardId) {
        return index;
      }
    }
  }

  throwCard(cardId) {
    const cards = this.#status.cardsInHand.player1;
    if (cards.length <= 0) {
      return;
    }

    const cardPosition = this.findCardPosition(cards, cardId);
    const [thrownCard] = cards.splice(cardPosition, 1);
    this.#status.cardOnPlay = thrownCard;
    this.#status.lot.push(thrownCard);
  }

  get status() {
    return this.#status;
  }
}

const randInt = (limit) => {
  return Math.floor((Math.random() * 1000) % limit);
};

module.exports = { Game }
