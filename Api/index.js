import express from 'express';
import bodyParser from 'body-parser';

import * as db from '../utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.use( bodyParser.json() );

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});

app.get('/user', (req, res)=>{
  db.usersList().then(data => res.send(data));
});

app.post('/user', (req, res)=>{
  db.createUser(req.body).then(data => res.send(data));
});

app.post('/login', (req, res) => {
  res.header('Access-Control-Allow-Headers', '*');
  res.sendStatus(200);
});

app.listen(8080, ()=>{
  console.log('listening to 8080');
});
//
// var WebSocketServer = new require('ws');
// var fs = require('fs');
//
// var clients = {};
//
// var webSocketServer = new WebSocketServer.Server({
//   port: 8080
// });
//
//
// webSocketServer.on('connection', function(ws) {
//
//   var id = Math.random();
//   clients[id] = ws;
//   var usersList = fs.readFileSync('./Api/Users/users.json', 'utf8');
//   // ws.send('Users List');
//   console.log("новое соединение " + id);
//
//   // ws.bind('list', function(){
//   //   return usersList
//   // });
//
//   ws.on('message', function(message) {
//     console.log('получено сообщение ' + message);
//
//     for (var key in clients) {
//       clients[key].send(message);
//     }
//   });
//
//   ws.on('close', function() {
//     console.log('соединение закрыто ' + id);
//     delete clients[id];
//   });
//
// });
