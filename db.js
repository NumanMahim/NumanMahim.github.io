// db.js

const oracledb = require('oracledb');

async function initialize() {
  const connection = await oracledb.getConnection({
    user: 'mh21adq',
    password: 'WRrQxS',
    connectString: 'your_connection_string',
  });
  return connection;
}

module.exports.initialize = initialize;
