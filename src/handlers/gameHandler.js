const randInt = (limit) => {
  return Math.floor((Math.random() * 1000) % limit);
};

class Game {
  #allCards;
  #status;

  constructor() {
    this.#allCards = [1, 2, 3, 4];
    this.#status = {
      cardsInHand: { player1: [] },
      deck: [],
      lot: []
    };
  }

  init() {
    this.#shuffleCards();
    this.#distributeCards();
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
    const cardLimit = 2;
    this.#status.cardsInHand.player1 = this.#allCards.slice(0, cardLimit);
    this.#status.deck = this.#allCards.slice(cardLimit);
  }

  drawCard() {
    if (this.#status.deck.length <= 0) {
      return;
    }
    const pickedCard = this.#status.deck.pop();
    this.#status.cardsInHand.player1.push(pickedCard);
  };

  throwCard() {
    if (this.#status.cardsInHand.player1.length <= 0) {
      return;
    }
    const thrownCard = this.#status.cardsInHand.player1.pop();
    this.#status.lot.push(thrownCard);
  }

  get status() {
    return this.#status;
  }
}

const drawCard = (req, res) => {
  const { game } = req;
  game.drawCard();
  res.json(game.status);
};

const throwCard = (req, res) => {
  const { game } = req;
  game.throwCard();
  res.json(game.status);
};

const playGame = (req, res) => {
  req.game.init();
  res.json(req.game.status);
};

module.exports = { drawCard, throwCard, playGame, Game };
