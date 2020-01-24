// importing db
const db = require('../data/db.config.js');

// export functions that i will us in the router
module.exports = {
    find,
    addResc,
    findResc,
    addPro
};

// this function gets all the schemes
function find(){
    return db('projects');
}

// function to add a resource
function addResc(resource){
    return db.insert(resource, '*').into('resources');
};

// function to find resources
function findResc(){
    return db.into('resources');
}

// add project method here
function addPro(project){
    return db.insert(project,"*").into("projects");
}