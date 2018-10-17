'use strict'

const fs = require('fs')

const schema = fs.readFileSync(__dirname + '/../dbCreationSchema.sql', 'utf-8')

exports.up = knex => knex.schema.raw(schema)

exports.down = knex => knex.schema.dropTable('users')