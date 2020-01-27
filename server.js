// import express
const express = require('express');

// import project router
const projectRouter = require('./project/project-router.js');

// invoke express to create a server
const server = express();

// reads json
server.use(express.json());

// get method to the server
server.get('/', (req, res) =>{
    res.send('Hello from the server!');
});

// end point for project here
server.use('/api/projects', projectRouter);

// export server
module.exports = server;