const knex = require('knex')


const dbConfig = {
    client: 'pg',
    connection: {
        host : 'localhost',
        port: '5433',
        user : 'username',
        password : 'password',
        database : 'db_name',
    }
}

exports.tryToConnect = () => knex(dbConfig)