const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'sql12.freesqldatabase.com',
      user: 'sql12746673',
      password: 'FRCKhTSXSM',
      database: 'sql12746673'
    }
  });
  
  module.exports = knex;