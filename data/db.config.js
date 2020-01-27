// import knex
const knex = require('knex');

// import knex configuration 
const knexConfig = require('../knexfile.js');

// exporting the config.
module.exports = knex(knexConfig.development); 