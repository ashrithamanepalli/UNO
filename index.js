const { startServer } = require('myserver');
const { createApp } = require('./src/app.js');

const config = {
  rootDirectory: './public'
};

startServer(8888, createApp(config));
