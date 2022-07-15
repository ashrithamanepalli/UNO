class Game {
  #allCards;
  #status;

  constructor() {
    this.#allCards = [1, 2, 3, 4];
    this.#status = {};
  }

  init() {
    this.#status = {
      player1: { cards: [1, 2] },
      deck: [3, 4],
      lot: []
    };
  }

  drawCard() {
    if (this.#status.deck.length <= 0) {
      return;
    }
    const pickedCard = this.#status.deck.pop();
    this.#status.player1.cards.push(pickedCard);
  };

  throwCard() {
    if (this.#status.player1.cards.length <= 0) {
      return;
    }
    const thrownCard = this.#status.player1.cards.pop();
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
