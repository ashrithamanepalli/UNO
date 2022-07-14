const { startServer } = require('myserver');
const { createApp } = require('./src/app.js');

startServer(8888, createApp());
