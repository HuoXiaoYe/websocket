const express = require("express")
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const fs = require("fs")
io.on('connection', (socket) => {
    console.log('io connection ..')
    socket.on('message', () => {});
});
app.get("/", (_, res) => {
    fs.readFile("./public/index.html", (err, content) => {
        res.writeHead(200, { "Content-Type": "text/html" })
        io.emit('message',new Date)
        res.end(content)
    })
})

server.listen(3000)