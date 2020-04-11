const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const configureRoutes = require('./users/routes.js')

const server = express()

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

server.use(helmet())
server.use(cors())
server.use(express.json())

configureRoutes(server)

module.exports = server