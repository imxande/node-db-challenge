// importing db
const db = require('../data/db.config.js');

// export functions that i will us in the router
module.exports = {
    find
};

// this function gets all the schemes
function find(){
    return db('projects');
}