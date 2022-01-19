export default {
        host      : 'localhost',
        port      : 3000,
        user      : 'root',
        password  : 'root',
        database  : 'nuxt.local'
    }

// // подключение к БД
// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   database: 'nuxt.local',
//   user     : 'root',  
//   password : 'root'
// });

// connection.connect();
//  let name = connection.query('SELECT * from name', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[3]);
//    name = rows[3].Name; 
//    console.log(name);    
//   return name; 
// });


// connection.end();

