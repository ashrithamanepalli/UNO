const { errorHandler, createFileContentServer, logRequest, parseBodyParams,
  parseSearchParams, createAsyncRouter } = require('myserver');
const { startGame } = require('./handlers/unoHandler');

const createApp = ({ rootDirectory }) => {
  const handlers = [
    parseSearchParams,
    parseBodyParams,
    logRequest,
    startGame,
    createFileContentServer(rootDirectory),
    errorHandler
  ]

  return createAsyncRouter(handlers);
};

module.exports = { createApp };
