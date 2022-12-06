require('dotenv').config();
const { Pool } = require('pg');

let userPool = new Pool({
  connectionString:
    'postgres://sakhawyq:Smhvw7-vygS4nzOXYoSL7dddWb8MpziK@suleiman.db.elephantsql.com/sakhawyq',
});
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return userPool.query(text, params, callback);
  },
};
