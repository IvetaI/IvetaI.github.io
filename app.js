// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: 'sql7.freesqldatabase.com',
  user: 'sql7291651',
  password: '1AKGnLYty1',
  database: 'sql7291651'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
