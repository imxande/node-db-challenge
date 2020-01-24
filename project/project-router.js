// import express
const express = require('express');

// invoke router with express to create a router
const router = express.Router();

// get method for router
router.get('/', (req, res) =>{
    res.send('Hello from the router!');
});

// export router
module.exports = router;