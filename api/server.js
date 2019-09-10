const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

const db = require('../data/db-config.js')

server.get('/cars', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars.'})
    })
})

module.exports = server;