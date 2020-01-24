// import express
const express = require('express');

// import model here
const Projects = require('./project-model.js');

// invoke router with express to create a router
const router = express.Router();

// get method for router
router.get('/hello', (req, res) =>{
    res.send('Hello from the router!');
});

// getting projects 
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  // adding resource
  router.post('/resources', (req, res) =>{
      const body = req.body
    Projects.addResc(body)
        .then(resource =>{
            // return success status and send back the response
            res.status(200).json(resource);
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage: 'Could not add a resource, error on the server!'})
        })
  })
// export router
module.exports = router;