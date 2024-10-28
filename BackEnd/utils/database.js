const config = require('../config/config.json');
const {Pool} = require('pg')

const conn = new Pool({
  host: config.host,
  user: config.user,
  port: config.port,
  database: config.database,
  password: config.password,
});

module.exports = conn;