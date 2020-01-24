// creating tables
exports.up = function (knex) {
    // projects table
    return knex.schema.createTable('projects', tbl => {
        // primary key
        tbl.increments();

        tbl.string('name', 50).notNullable();

        tbl.string('description', 100);

        tbl.boolean('completed').notNullable().defaultTo(false);
    
    })
    // resources table
    .createTable('resources', tbl => {
        // primary key
        tbl.increments();

        tbl.string('name', 50).notNullable();

        tbl.string('decription');
    })
    // projectDetails table 
    .createTable('projectDetails', tbl => {
        // primary key
        tbl.increments();

        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')

        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources')


    })
    // task table here
    .createTable('tasks', tbl => {
        // primary key
        tbl.increments();

        tbl.string('description', 100).notNullable();

        tbl.string('notes', 100);

        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')

        tbl.boolean('completed').notNullable().defaultTo(false);

    })
};

// rollback, undo changes from up function
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('projectDetails')
        .dropTableIfExists('tasks')
};
