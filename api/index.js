const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios')
axios.defaults.baseURL = 'http://elastic:Adminadeccd@77.223.120.153:9280/';
// import dbProvider from '../db/index';

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
  axios.get('/posts/_search').then(resp => {
    res.json(resp.data.hits.hits)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

app.all('/post/:id', (req, res) => {
  axios.get(`/posts/_doc/${req.params.id}`).then(resp => {
    res.json(resp.data)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

app.all('/health', (req, res) => { 
  //console.log('/health')
  axios.get('http://elastic:Adminadeccd@77.223.120.153:9280/_cluster/health').then(resp => {
    res.json(resp.data)
  }).catch(err => {
    console.log(err)
    throw new Error(err);
  });
})

app.all('/metrica', (req, res) => { 
  //console.log('/health')
  axios.get('https://api-metrika.yandex.net/stat/v1/data?preset=sources_summary&id=44147844').then(resp => {
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

//  http://77.223.120.153:9280/_cluster/health
// https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html
// https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-stats.html
// https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-health.html
//https://learn.javascript.ru/json
// connection.end();