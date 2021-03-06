// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    // i need this with sqlite3
    useNullAsDefault:true,

     // migrations
     migrations:{
      directory: './data/migrations',
    },

    //seeds
    seeds:{
      directory: './data/seeds',
    },
    
    connection: {
      filename: './data/project.db3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
