class Game {
  #allCards;
  #status;
  #cardPerPlayer;

  constructor(shuffledCards, cardPerPlayer) {
    this.#allCards = shuffledCards;
    this.#cardPerPlayer = cardPerPlayer;

    this.#status = {
      cardsInHand: { player1: [] },
      cardOnPlay: null,
      deck: [],
      lot: []
    };
  }

  init() {
    this.#distributeCards();
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

  #findCardPosition(cards, cardId) {
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

    const cardPosition = this.#findCardPosition(cards, cardId);
    const [thrownCard] = cards.splice(cardPosition, 1);
    this.#status.cardOnPlay = thrownCard;
    this.#status.lot.push(thrownCard);
  }

  get status() {
    return this.#status;
  }
}

module.exports = { Game }
