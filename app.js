require( ['mysql'], function( mysql ) {
  var con =  mysql.createConnection({
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

});