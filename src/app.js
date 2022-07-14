const { errorHandler, createFileContentServer, logRequest, parseBodyParams,
  parseSearchParams, createAsyncRouter } = require('myserver');
const { startGame } = require('./handlers/unoHandler');

const createApp = ({ rootDirectory }) => {
  const status = {
    player1: [1, 2],
    deck: [3, 4],
    lot: []
  };

  const handlers = [
    parseSearchParams,
    parseBodyParams,
    logRequest,
    startGame(status),
    createFileContentServer(rootDirectory),
    errorHandler
  ]

  return createAsyncRouter(handlers);
};

module.exports = { createApp };
