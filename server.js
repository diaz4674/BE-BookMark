const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const configureRoutes = require('./users/routes.js')

const server = express()


server.use(helmet())
server.use(cors())
server.use(express.json())

configureRoutes(server)

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://quizzical-blackwell-d608a3.netlify.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

module.exports = server