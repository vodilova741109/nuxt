const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios')
import dbProvider from '../db/index';

app.use(bodyParser.json())


app.all('/getjson', (req, res) => {
  dbProvider.getUsers.then( rows =>{
    res.json(rows)
  })
  .catch(err => {
    console.log(err)
    throw new Error(err);
  });
})


app.all('/posts', (req, res) => {
  axios.get('http://elastic:MagicPatriotgorodPeremens876tghui@new-el.fabricmedia.ru:9271/posts/_search').then(resp => {
    res.json(resp.data.hits.hits)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

app.all('/post/:id', (req, res) => {
  axios.get(`http://elastic:MagicPatriotgorodPeremens876tghui@new-el.fabricmedia.ru:9271/posts/_doc/${req.params.id}`).then(resp => {
    res.json(resp.data)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

export default {
  path: '/api',
  handler: app
}



// подключение к БД
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