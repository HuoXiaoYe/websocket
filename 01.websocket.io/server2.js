const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const fs = require("fs")
io.on('connection', (socket) => {
    console.log('io connection ..')
    socket.on('message', (time) => {});
});

// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// })

app.get("/", (_, res) => {
    fs.readFile("./public/index.html", (err, content) => {
        res.writeHead(200, { "Content-Type": "text/html" })
        io.emit('message',new Date)
        res.end(content)
        
    })
})


server.listen(3000); 