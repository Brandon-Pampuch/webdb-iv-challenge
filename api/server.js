const express = require('express');
const helmet = require('helmet');

const cookBook_router = require('./routes/cookBook_router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cookbook', cookBook_router);
server.get("/",(req,res)=>{
    res.sendStatus(200)
})
module.exports = server;