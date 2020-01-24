// import server
const server = require('./server.js');

// providing port
const port = process.env.PORT || 5000;

// listen for traffic
server.listen(port, () =>{
    console.log((`\n****SERVER RUNINING ON PORT ${port}***\n`))
})