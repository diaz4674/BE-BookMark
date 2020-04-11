const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const configureRoutes = require('./users/routes.js')

const server = express()


server.use(helmet())
server.use(cors({origin: "*"}))
server.use(express.json())

configureRoutes(server)

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

module.exports = server