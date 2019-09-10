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

server.post('/cars', (req, res) => {
  const carData = req.body
  db('cars').insert(carData)
    .then(newCar => {
      res.status(201).json({ message: 'Successfully created car.'})
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create the car.'})
    })
})

server.get('/cars/:id', (req, res) => {
  const { id } = req.params
  db('cars').where({ id }).first()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve the car.'})
    })
})

server.put('/cars/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body
  db('cars')
    .where('id', id)
    .update(changes)
    .then(updated => {
      res.status(200).json(updated)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = server;