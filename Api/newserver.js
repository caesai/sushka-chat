var WebSocketServer = new require('ws');
var fs = require('fs');

var clients = {};

var webSocketServer = new WebSocketServer.Server({
  port: 8080
});


webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  var usersList = fs.readFileSync('./Api/Users/users.json', 'utf8');
  // ws.send('Users List');
  console.log("новое соединение " + id);

  // ws.bind('list', function(){
  //   return usersList
  // });

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });

});
