const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const app = express();

module.exports = app
  // body parsing middleware
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  // serve static files
  .use(express.static(resolve(__dirname, '..', 'public')))

  // serve api
  //.use('/api', require('./api'))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  // error handling middleware
  .use((err, req, res, next) => {
    console.error(err);
  });

const server = app.listen(
  process.env.PORT || 1337,
  () => {
    console.log('~~~ started http server for acdb ~~~')
    const { address, port } = server.address();
    const host = address === '::' ? 'localhost' : address;
    const urlSafeHost = host.includes(':') ? `[${host}]` : host;
    console.log(`Listening on http://${urlSafeHost}:${port}`);
  }
);
