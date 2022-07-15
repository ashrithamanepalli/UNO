const randInt = (limit) => {
  return Math.floor((Math.random() * 1000) % limit);
};

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
        this.#allCards.push({
          color: colors[colIndex],
          symbol: symbols[symIndex]
        });
      }
    }
    console.log(this.#allCards, this.#allCards.length);
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
    console.log(this.#status);
  };

  throwCard() {
    if (this.#status.cardsInHand.player1.length <= 0) {
      return;
    }
    const thrownCard = this.#status.cardsInHand.player1.pop();
    this.#status.cardOnPlay = thrownCard;
    this.#status.lot.push(thrownCard);
    console.log(this.#status);
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
