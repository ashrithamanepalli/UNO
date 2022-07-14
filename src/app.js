const { errorHandler, createFileContentServer, logRequest, parseBodyParams,
  parseSearchParams, createAsyncRouter } = require('myserver');

const createApp = () => {
  const handlers = [
    parseSearchParams,
    parseBodyParams,
    logRequest,
    createFileContentServer(),
    errorHandler
  ]

  return createAsyncRouter(handlers);
};

module.exports = { createApp };
