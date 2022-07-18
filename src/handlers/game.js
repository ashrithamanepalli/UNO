class Game {
  #allCards;
  #status;
  #cardPerPlayer;
  #players;

  constructor(shuffledCards, cardPerPlayer) {
    this.#allCards = shuffledCards;
    this.#cardPerPlayer = cardPerPlayer;
    this.#players = [];

    this.#status = {
      cardsInHand: {},
      cardOnPlay: null,
      deck: [],
      lot: []
    };
  }

  init() {
    if (!this.#status.cardOnPlay) {
      this.#distributeCards();
    }
  }

  #distributeCards() {
    const cardLimit = this.#cardPerPlayer;
    const totalPlayers = this.#players.length;

    for (let cardCount = 0; cardCount < this.#cardPerPlayer; cardCount++) {
      for (let player = 0; player < totalPlayers; player++) {
        const { username } = this.#players[player];
        const playerCards = this.#status.cardsInHand[username] || [];
        playerCards.push(this.#allCards[(cardCount * totalPlayers) + player]);
        this.#status.cardsInHand[username] = playerCards;
      }
    }

    const cardsDistributed = cardLimit * totalPlayers;
    this.#status.cardOnPlay = this.#allCards[cardsDistributed];
    this.#status.deck = this.#allCards.slice(cardsDistributed + 1);
  }

  addPlayer({ username }) {
    this.#players.push({ username });
  }

  areSlotsFilled() {
    return this.#players.length === 2;
  }

  drawCard(username) {
    if (this.#status.deck.length <= 0) {
      return;
    }
    const pickedCard = this.#status.deck.pop();
    this.#status.cardsInHand[username].push(pickedCard);
  };

  #findCardPosition(cards, cardId) {
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].id === cardId) {
        return index;
      }
    }
  }

  throwCard(username, cardId) {
    const cards = this.#status.cardsInHand[username];
    if (cards.length <= 0) {
      return;
    }

    const cardPosition = this.#findCardPosition(cards, cardId);
    const [thrownCard] = cards.splice(cardPosition, 1);
    this.#status.cardOnPlay = thrownCard;
    this.#status.lot.push(thrownCard);
  }

  handOf(player) {
    return this.#status.cardsInHand[player];
  }

  tableInfo() {
    const { deck, lot, cardOnPlay } = this.#status;
    return { deck, lot, cardOnPlay };
  }
}

module.exports = { Game }
