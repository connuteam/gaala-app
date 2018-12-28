const http = require('http')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const listingsRouter = require('./controllers/listings')
const config = require('./utils/config')

mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use('/api/listings', listingsRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
    mongoose.connection.close()
})

module.exports = {
    app, server
}