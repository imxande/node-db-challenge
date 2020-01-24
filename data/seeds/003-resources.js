
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        // populates the name in the resource table
        { name:'Zeratul'},
        { name:'Jim Raynor'},
        { name:'Nova'},
        { name:'Sarah Kerrigan'}
      ]);
    });
};
