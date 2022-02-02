const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const plantRouter = require('./plants/plants-router')
const userRouter = require('./users/user-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/plants', plantRouter)
server.use('/api/users', userRouter)

server.use('*', (req, res) => {
  res.status(404).json({ message: `${req.method} ${req.baseUrl} is not a valid address`})
})

server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({message: `${err.message}`})
})

module.exports = server
