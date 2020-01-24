// import express
const express = require('express');

// invoke express to create a server
const server = express();

// reads json
server.use(express.json());

// get method to the server
server.get('/', (req, res) =>{
    res.send('Hello from the server!');
});

// export server
module.exports = server;