const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer(app)

server.listen("8080", () => {
    console.log(`Server running on port 8080`)
})

server.on('close', () => {
    mongoose.connection.close()
})

module.exports = {
    app, server
}