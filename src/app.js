const logRequest = (req, res, next) => {
  console.log(`[${req.method}] ==> ${req.url}`);
  next();
};

const express = require('express');

const createApp = ({ rootDirectory }, status) => {

  const app = express();

  app.use(logRequest);

  app.get('/refresh', (req, res) => {
    res.json(status);
  });

  app.post('/draw-card', (req, res) => {
    const pickedCard = status.deck.pop();
    status.player1.push(pickedCard);
    res.redirect('/refresh');
    res.end();
  });

  app.post('/throw-card', (req, res) => {
    const thrownCard = status.player1.pop();
    status.lot.push(thrownCard);
    res.redirect('/refresh');
    res.end();
  });

  app.use(express.static(rootDirectory));

  return app;

};

module.exports = { createApp };
