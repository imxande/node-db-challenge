
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description:'Aiur is the protoss homeworld, located in a star system with a single yellow star and possessing a single moon not unlike Luna.', project_id:1 },
        { description:'Mar Sara was catalogued by freelance terran prospectors and colonized by an expedition from Tarsonis several years later.', project_id:2 },
        { description:'Korhal IV (often simply referred to as Korhal) is the fourth planet in the Korhal system.', project_id:3 }
      ]);
    });
};
