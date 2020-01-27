// importing db
const db = require('../data/db.config.js');

// export functions that i will us in the router
module.exports = {
    find,
    addResc,
    findResc,
    addPro,
    addTask,
    findTask
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

// add task method here
function addTask(task){
    return db.insert(task,"*").into("tasks");
}

// finding a task by id here
function findTask(id){
    return db("tasks")
        .select('tasks.description','tasks.notes','projects.name')
        .join('projects','projects.id','tasks.project_id')
        .where("project_id", id);
}