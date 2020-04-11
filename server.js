const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const configureRoutes = require('./users/routes.js')

const server = express()


server.use(helmet())
server.use(cors({origin: "*"}))
server.use(express.json())

configureRoutes(server)

module.exports = server